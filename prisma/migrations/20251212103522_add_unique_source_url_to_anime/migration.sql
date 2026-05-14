/*
  Warnings:

  - A unique constraint covering the columns `[sourceUrl]` on the table `Anime` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Anime_sourceUrl_key" ON "Anime"("sourceUrl");
