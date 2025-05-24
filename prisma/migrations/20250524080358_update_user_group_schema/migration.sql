/*
  Warnings:

  - Added the required column `userCode` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Users` ADD COLUMN `userCode` VARCHAR(191) NOT NULL;
