/*
  Warnings:

  - A unique constraint covering the columns `[animeId,episodeTitle]` on the table `Episode` will be added. If there are existing duplicate values, this will fail.

*/
-- Remove existing duplicate rows so the unique index can be created safely.
-- Keep the row with the lowest id per ("animeId", "episodeTitle") pair,
-- reassign dependent Source rows to the kept Episode, and then delete
-- the extra Episode rows.
WITH "ranked_episodes" AS (
  SELECT
    id,
    "animeId",
    "episodeTitle",
    ROW_NUMBER() OVER (
      PARTITION BY "animeId", "episodeTitle"
      ORDER BY id
    ) AS rn
  FROM "Episode"
),
"episode_keep_map" AS (
  SELECT
    duplicate.id AS duplicate_id,
    keeper.id    AS keeper_id
  FROM "ranked_episodes" duplicate
  JOIN "ranked_episodes" keeper
    ON duplicate."animeId"      = keeper."animeId"
   AND duplicate."episodeTitle" = keeper."episodeTitle"
   AND keeper.rn = 1
  WHERE duplicate.rn > 1
)
-- Delete sources on duplicate episodes that would violate the unique
-- (episodeId, value) constraint on Source after being reassigned to the keeper.
DELETE FROM "Source"
WHERE id IN (
  SELECT s.id
  FROM "Source" s
  JOIN "episode_keep_map" m ON s."episodeId" = m.duplicate_id
  WHERE EXISTS (
    SELECT 1 FROM "Source" ks
    WHERE ks."episodeId" = m.keeper_id
      AND ks.value = s.value
  )
);

WITH "ranked_episodes" AS (
  SELECT
    id,
    "animeId",
    "episodeTitle",
    ROW_NUMBER() OVER (
      PARTITION BY "animeId", "episodeTitle"
      ORDER BY id
    ) AS rn
  FROM "Episode"
),
"episode_keep_map" AS (
  SELECT
    duplicate.id AS duplicate_id,
    keeper.id    AS keeper_id
  FROM "ranked_episodes" duplicate
  JOIN "ranked_episodes" keeper
    ON duplicate."animeId"      = keeper."animeId"
   AND duplicate."episodeTitle" = keeper."episodeTitle"
   AND keeper.rn = 1
  WHERE duplicate.rn > 1
)
UPDATE "Source" AS s
SET "episodeId" = m.keeper_id
FROM "episode_keep_map" AS m
WHERE s."episodeId" = m.duplicate_id;

WITH "ranked_episodes" AS (
  SELECT
    id,
    ROW_NUMBER() OVER (
      PARTITION BY "animeId", "episodeTitle"
      ORDER BY id
    ) AS rn
  FROM "Episode"
)
DELETE FROM "Episode"
WHERE id IN (
  SELECT id
  FROM "ranked_episodes"
  WHERE rn > 1
);

-- CreateIndex
CREATE UNIQUE INDEX "Episode_animeId_episodeTitle_key" ON "Episode"("animeId", "episodeTitle");
