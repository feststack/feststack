-- CreateTable
CREATE TABLE `Editions` (
    `editionId` INTEGER NOT NULL AUTO_INCREMENT,
    `editionName` VARCHAR(191) NOT NULL,
    `editionYear` INTEGER NOT NULL,
    `isCurrentedition` BOOLEAN NOT NULL DEFAULT false,
    `editionStatusId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Editions_editionYear_key`(`editionYear`),
    PRIMARY KEY (`editionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

-- CreateTable
CREATE TABLE `Shows` (
    `showId` INTEGER NOT NULL AUTO_INCREMENT,
    `showName` VARCHAR(191) NOT NULL,
    `editionId` INTEGER NOT NULL,
    `showStatusId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Shows_showName_key`(`showName`),
    INDEX `Editions_editionId_fkey`(`editionId`),
    INDEX `ShowsStatuses_showStatusId_fkey`(`showStatusId`),
    PRIMARY KEY (`showId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Artists` (
    `artistId` INTEGER NOT NULL AUTO_INCREMENT,
    `artistName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Artists_artistName_key`(`artistName`),
    PRIMARY KEY (`artistId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShowsStatuses` (
    `showStatusId` INTEGER NOT NULL AUTO_INCREMENT,
    `showStatusCode` VARCHAR(191) NOT NULL,
    `showStatusName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `ShowsStatuses_showStatusCode_key`(`showStatusCode`),
    PRIMARY KEY (`showStatusId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
ALTER TABLE `Editions` ADD CONSTRAINT `Editions_editionStatusId_fkey` FOREIGN KEY (`editionStatusId`) REFERENCES `EditionsStatuses`(`editionStatusId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Shows` ADD CONSTRAINT `Shows_editionId_fkey` FOREIGN KEY (`editionId`) REFERENCES `Editions`(`editionId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Shows` ADD CONSTRAINT `Shows_showStatusId_fkey` FOREIGN KEY (`showStatusId`) REFERENCES `ShowsStatuses`(`showStatusId`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
