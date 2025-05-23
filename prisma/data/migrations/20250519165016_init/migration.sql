-- CreateTable
CREATE TABLE `Editions` (
    `editionId` INTEGER NOT NULL AUTO_INCREMENT,
    `editionName` VARCHAR(191) NOT NULL,
    `editionYear` INTEGER NOT NULL,
    `isCurrentedition` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`editionId`)
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

    PRIMARY KEY (`artistId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShowsArtists` (
    `showArtistId` INTEGER NOT NULL AUTO_INCREMENT,
    `showId` INTEGER NOT NULL,
    `artistId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    INDEX `Shows_showId_fkey`(`showId`),
    INDEX `Artists_artistId_fkey`(`artistId`),
    PRIMARY KEY (`showArtistId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShowsStatuses` (
    `showStatusId` INTEGER NOT NULL AUTO_INCREMENT,
    `showStatusCode` VARCHAR(191) NOT NULL,
    `showStatusName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`showStatusId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Shows` ADD CONSTRAINT `Shows_editionId_fkey` FOREIGN KEY (`editionId`) REFERENCES `Editions`(`editionId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Shows` ADD CONSTRAINT `Shows_showStatusId_fkey` FOREIGN KEY (`showStatusId`) REFERENCES `ShowsStatuses`(`showStatusId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShowsArtists` ADD CONSTRAINT `ShowsArtists_showId_fkey` FOREIGN KEY (`showId`) REFERENCES `Shows`(`showId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShowsArtists` ADD CONSTRAINT `ShowsArtists_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `Artists`(`artistId`) ON DELETE RESTRICT ON UPDATE CASCADE;
