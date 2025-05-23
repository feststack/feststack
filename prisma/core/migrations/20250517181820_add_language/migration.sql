/*
  Warnings:

  - Added the required column `userLanguageId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `userLanguageId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Language` (
    `languageId` INTEGER NOT NULL AUTO_INCREMENT,
    `languageName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`languageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `User_userLanguageId_fkey` ON `User`(`userLanguageId`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_userLanguageId_fkey` FOREIGN KEY (`userLanguageId`) REFERENCES `Language`(`languageId`) ON DELETE RESTRICT ON UPDATE CASCADE;
