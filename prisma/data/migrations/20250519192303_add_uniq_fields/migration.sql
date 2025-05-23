/*
  Warnings:

  - A unique constraint covering the columns `[artistName]` on the table `Artists` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[editionYear]` on the table `Editions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[showName]` on the table `Shows` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[showStatusCode]` on the table `ShowsStatuses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Artists_artistName_key` ON `Artists`(`artistName`);

-- CreateIndex
CREATE UNIQUE INDEX `Editions_editionYear_key` ON `Editions`(`editionYear`);

-- CreateIndex
CREATE UNIQUE INDEX `Shows_showName_key` ON `Shows`(`showName`);

-- CreateIndex
CREATE UNIQUE INDEX `ShowsStatuses_showStatusCode_key` ON `ShowsStatuses`(`showStatusCode`);
