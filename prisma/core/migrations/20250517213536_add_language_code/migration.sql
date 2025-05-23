/*
  Warnings:

  - Added the required column `languageCode` to the `Language` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Language` ADD COLUMN `languageCode` VARCHAR(191) NOT NULL;
