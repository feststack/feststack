/*
  Warnings:

  - You are about to drop the `AdGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Language` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserAdGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserAuth` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserContact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_userLanguageId_fkey`;

-- DropForeignKey
ALTER TABLE `UserAdGroup` DROP FOREIGN KEY `UserAdGroup_adGroupId_fkey`;

-- DropForeignKey
ALTER TABLE `UserAdGroup` DROP FOREIGN KEY `UserAdGroup_userId_fkey`;

-- DropForeignKey
ALTER TABLE `UserAuth` DROP FOREIGN KEY `UserAuth_userId_fkey`;

-- DropForeignKey
ALTER TABLE `UserContact` DROP FOREIGN KEY `UserContact_userId_fkey`;

-- DropTable
DROP TABLE `AdGroup`;

-- DropTable
DROP TABLE `Language`;

-- DropTable
DROP TABLE `User`;

-- DropTable
DROP TABLE `UserAdGroup`;

-- DropTable
DROP TABLE `UserAuth`;

-- DropTable
DROP TABLE `UserContact`;

-- CreateTable
CREATE TABLE `Users` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `userName` VARCHAR(191) NOT NULL,
    `userSurname` VARCHAR(191) NOT NULL,
    `userCode` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `userLanguageId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    INDEX `User_userLanguageId_fkey`(`userLanguageId`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsersContacts` (
    `userContactId` INTEGER NOT NULL AUTO_INCREMENT,
    `userContactType` ENUM('EMAIL', 'PHONE', 'SOCIAL') NOT NULL,
    `userContactScope` ENUM('PERSONAL', 'PROFESSIONAL', 'OTHER') NOT NULL,
    `userContactValue` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userId` INTEGER NOT NULL,

    INDEX `UserContact_userId_fkey`(`userId`),
    PRIMARY KEY (`userContactId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsersAuth` (
    `authId` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `UsersAuth_email_key`(`email`),
    UNIQUE INDEX `UsersAuth_userId_key`(`userId`),
    PRIMARY KEY (`authId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AdGroups` (
    `adGroupId` INTEGER NOT NULL AUTO_INCREMENT,
    `adGroupName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',

    PRIMARY KEY (`adGroupId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsersAdGroups` (
    `userAdGroupId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `adGroupId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    INDEX `UserAdGroup_adGroupId_fkey`(`adGroupId`),
    INDEX `UserAdGroup_userId_fkey`(`userId`),
    PRIMARY KEY (`userAdGroupId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Languages` (
    `languageId` INTEGER NOT NULL AUTO_INCREMENT,
    `languageName` VARCHAR(191) NOT NULL,
    `languageCode` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`languageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_userLanguageId_fkey` FOREIGN KEY (`userLanguageId`) REFERENCES `Languages`(`languageId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersContacts` ADD CONSTRAINT `UsersContacts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersAuth` ADD CONSTRAINT `UsersAuth_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersAdGroups` ADD CONSTRAINT `UsersAdGroups_adGroupId_fkey` FOREIGN KEY (`adGroupId`) REFERENCES `AdGroups`(`adGroupId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersAdGroups` ADD CONSTRAINT `UsersAdGroups_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
