/*
  Warnings:

  - A unique constraint covering the columns `[adGroupName]` on the table `AdGroups` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[languageCode]` on the table `Languages` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `AdGroups_adGroupName_key` ON `AdGroups`(`adGroupName`);

-- CreateIndex
CREATE UNIQUE INDEX `Languages_languageCode_key` ON `Languages`(`languageCode`);
