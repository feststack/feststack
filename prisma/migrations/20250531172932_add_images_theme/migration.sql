/*
  Warnings:

  - A unique constraint covering the columns `[imageName]` on the table `Images` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `GraphicThemes` ADD COLUMN `backgroundImgId` INTEGER NULL,
    ADD COLUMN `logoImgId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Images_imageName_key` ON `Images`(`imageName`);

-- AddForeignKey
ALTER TABLE `GraphicThemes` ADD CONSTRAINT `GraphicThemes_backgroundImgId_fkey` FOREIGN KEY (`backgroundImgId`) REFERENCES `Images`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GraphicThemes` ADD CONSTRAINT `GraphicThemes_logoImgId_fkey` FOREIGN KEY (`logoImgId`) REFERENCES `Images`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
