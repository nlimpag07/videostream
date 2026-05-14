/*
  Warnings:

  - A unique constraint covering the columns `[animeId,episodeTitle]` on the table `Episode` will be added. If there are existing duplicate values, this will fail.

*/
-- Remove existing duplicate rows so the unique index can be created safely.
-- Keep the first row per ("animeId", "episodeTitle") pair and delete the rest.
WITH "duplicate_rows" AS (
  SELECT
    ctid,
    ROW_NUMBER() OVER (
      PARTITION BY "animeId", "episodeTitle"
      ORDER BY ctid
    ) AS rn
  FROM "Episode"
)
DELETE FROM "Episode"
WHERE ctid IN (
  SELECT ctid
  FROM "duplicate_rows"
  WHERE rn > 1
);

-- CreateIndex
CREATE UNIQUE INDEX "Episode_animeId_episodeTitle_key" ON "Episode"("animeId", "episodeTitle");
