/*
  Warnings:

  - You are about to drop the `ShowsArtists` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ShowsArtists` DROP FOREIGN KEY `ShowsArtists_artistId_fkey`;

-- DropForeignKey
ALTER TABLE `ShowsArtists` DROP FOREIGN KEY `ShowsArtists_showId_fkey`;

-- DropTable
DROP TABLE `ShowsArtists`;

-- CreateTable
CREATE TABLE `ArtistsManagementsCategories` (
    `artistManagementCategoryId` INTEGER NOT NULL AUTO_INCREMENT,
    `artistManagementCategoryName` VARCHAR(191) NOT NULL,
    `artistManagementCategoryComment` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`artistManagementCategoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArtistsManagements` (
    `artistManagementId` INTEGER NOT NULL AUTO_INCREMENT,
    `artistManagementName` VARCHAR(191) NOT NULL,
    `artistManagementCategoryId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    INDEX `ArtistsManagementsCategories_artistManagementCategoryId_fkey`(`artistManagementCategoryId`),
    PRIMARY KEY (`artistManagementId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArtistsArtistsManagements` (
    `artistArtistManagementId` INTEGER NOT NULL AUTO_INCREMENT,
    `artistId` INTEGER NOT NULL,
    `artistManagementId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    INDEX `Artists_artistId_fkey`(`artistId`),
    INDEX `ArtistsManagements_artistManagementId_fkey`(`artistManagementId`),
    PRIMARY KEY (`artistArtistManagementId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Performances` (
    `performanceId` INTEGER NOT NULL AUTO_INCREMENT,
    `performanceName` VARCHAR(191) NOT NULL,
    `performanceArtistArtistManagementId` INTEGER NOT NULL,
    `performanceShowId` INTEGER NOT NULL,
    `editionId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`performanceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contracts` (
    `contractId` INTEGER NOT NULL AUTO_INCREMENT,
    `contractName` VARCHAR(191) NOT NULL,
    `performanceId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Contracts_performanceId_key`(`performanceId`),
    PRIMARY KEY (`contractId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ArtistsManagements` ADD CONSTRAINT `ArtistsManagements_artistManagementCategoryId_fkey` FOREIGN KEY (`artistManagementCategoryId`) REFERENCES `ArtistsManagementsCategories`(`artistManagementCategoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArtistsArtistsManagements` ADD CONSTRAINT `ArtistsArtistsManagements_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `Artists`(`artistId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArtistsArtistsManagements` ADD CONSTRAINT `ArtistsArtistsManagements_artistManagementId_fkey` FOREIGN KEY (`artistManagementId`) REFERENCES `ArtistsManagements`(`artistManagementId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Performances` ADD CONSTRAINT `Performances_performanceArtistArtistManagementId_fkey` FOREIGN KEY (`performanceArtistArtistManagementId`) REFERENCES `ArtistsArtistsManagements`(`artistArtistManagementId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Performances` ADD CONSTRAINT `Performances_performanceShowId_fkey` FOREIGN KEY (`performanceShowId`) REFERENCES `Shows`(`showId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Performances` ADD CONSTRAINT `Performances_editionId_fkey` FOREIGN KEY (`editionId`) REFERENCES `Editions`(`editionId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contracts` ADD CONSTRAINT `Contracts_performanceId_fkey` FOREIGN KEY (`performanceId`) REFERENCES `Performances`(`performanceId`) ON DELETE RESTRICT ON UPDATE CASCADE;
