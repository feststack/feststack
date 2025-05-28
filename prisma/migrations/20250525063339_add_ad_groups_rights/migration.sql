/*
  Warnings:

  - You are about to drop the column `adGroupName` on the `AdGroups` table. All the data in the column will be lost.
  - You are about to drop the column `canCreat` on the `AdGroups` table. All the data in the column will be lost.
  - You are about to drop the column `canDelete` on the `AdGroups` table. All the data in the column will be lost.
  - You are about to drop the column `canRread` on the `AdGroups` table. All the data in the column will be lost.
  - You are about to drop the column `canUpdate` on the `AdGroups` table. All the data in the column will be lost.
  - Added the required column `adGroupRightId` to the `AdGroups` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `AdGroups_adGroupName_key` ON `AdGroups`;

-- AlterTable
ALTER TABLE `AdGroups` DROP COLUMN `adGroupName`,
    DROP COLUMN `canCreat`,
    DROP COLUMN `canDelete`,
    DROP COLUMN `canRread`,
    DROP COLUMN `canUpdate`,
    ADD COLUMN `adGroupRightId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `AdGroupsRights` (
    `adGroupRightId` INTEGER NOT NULL AUTO_INCREMENT,
    `adGroupdRightName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`adGroupRightId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AdGroups` ADD CONSTRAINT `AdGroups_adGroupRightId_fkey` FOREIGN KEY (`adGroupRightId`) REFERENCES `AdGroupsRights`(`adGroupRightId`) ON DELETE RESTRICT ON UPDATE CASCADE;
