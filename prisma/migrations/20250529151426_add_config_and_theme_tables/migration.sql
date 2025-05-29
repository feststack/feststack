-- CreateTable
CREATE TABLE `AppConfigs` (
    `appConfigId` INTEGER NOT NULL AUTO_INCREMENT,
    `appConfigName` VARCHAR(191) NOT NULL,
    `appConfigValue` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`appConfigId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GraphicThemes` (
    `graphicThemeId` INTEGER NOT NULL AUTO_INCREMENT,
    `graphicThemeName` VARCHAR(191) NOT NULL,
    `color1` VARCHAR(191) NOT NULL,
    `color2` VARCHAR(191) NOT NULL,
    `color3` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`graphicThemeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
