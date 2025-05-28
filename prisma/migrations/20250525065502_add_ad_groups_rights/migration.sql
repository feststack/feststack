/*
  Warnings:

  - You are about to drop the column `adGroupdRightName` on the `AdGroupsRights` table. All the data in the column will be lost.
  - Added the required column `adGroupRightName` to the `AdGroupsRights` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `AdGroupsRights` DROP COLUMN `adGroupdRightName`,
    ADD COLUMN `adGroupRightName` VARCHAR(191) NOT NULL;
