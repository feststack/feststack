-- CreateTable
CREATE TABLE `ClientsApps` (
    `clientAppId` INTEGER NOT NULL AUTO_INCREMENT,
    `clientAppName` VARCHAR(191) NOT NULL,
    `clientAppUrl` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`clientAppId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsersAuth` (
    `userAuthId` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` VARCHAR(191) NOT NULL DEFAULT 'SYSTEM',
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `UsersAuth_email_key`(`email`),
    PRIMARY KEY (`userAuthId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsersRooting` (
    `userRootingId` INTEGER NOT NULL AUTO_INCREMENT,
    `userAuthId` INTEGER NOT NULL,
    `clientAppId` INTEGER NOT NULL,

    UNIQUE INDEX `UsersRooting_userAuthId_clientAppId_key`(`userAuthId`, `clientAppId`),
    PRIMARY KEY (`userRootingId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UsersRooting` ADD CONSTRAINT `UsersRooting_userAuthId_fkey` FOREIGN KEY (`userAuthId`) REFERENCES `UsersAuth`(`userAuthId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersRooting` ADD CONSTRAINT `UsersRooting_clientAppId_fkey` FOREIGN KEY (`clientAppId`) REFERENCES `ClientsApps`(`clientAppId`) ON DELETE RESTRICT ON UPDATE CASCADE;
