/*
  Warnings:

  - Added the required column `editionStatusId` to the `Editions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Editions` ADD COLUMN `editionStatusId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `EditionsStatuses` (
    `editionStatusId` INTEGER NOT NULL AUTO_INCREMENT,
    `editionStatusCode` VARCHAR(191) NOT NULL,
    `editionStatusName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`editionStatusId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Editions` ADD CONSTRAINT `Editions_editionStatusId_fkey` FOREIGN KEY (`editionStatusId`) REFERENCES `EditionsStatuses`(`editionStatusId`) ON DELETE RESTRICT ON UPDATE CASCADE;
