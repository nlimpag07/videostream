/*
  Warnings:

  - A unique constraint covering the columns `[animeId,episodeTitle]` on the table `Episode` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Episode_animeId_episodeTitle_key" ON "Episode"("animeId", "episodeTitle");
