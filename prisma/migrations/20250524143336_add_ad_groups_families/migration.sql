/*
  Warnings:

  - Added the required column `adGroupFamilyId` to the `AdGroups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `canCreat` to the `AdGroups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `canDelete` to the `AdGroups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `canRread` to the `AdGroups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `canUpdate` to the `AdGroups` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `AdGroups` ADD COLUMN `adGroupFamilyId` INTEGER NOT NULL,
    ADD COLUMN `canCreat` BOOLEAN NOT NULL,
    ADD COLUMN `canDelete` BOOLEAN NOT NULL,
    ADD COLUMN `canRread` BOOLEAN NOT NULL,
    ADD COLUMN `canUpdate` BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE `AdGroupsFamilies` (
    `adGroupFamilyId` INTEGER NOT NULL AUTO_INCREMENT,
    `adGroupFamilyName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`adGroupFamilyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AdGroups` ADD CONSTRAINT `AdGroups_adGroupFamilyId_fkey` FOREIGN KEY (`adGroupFamilyId`) REFERENCES `AdGroupsFamilies`(`adGroupFamilyId`) ON DELETE RESTRICT ON UPDATE CASCADE;
