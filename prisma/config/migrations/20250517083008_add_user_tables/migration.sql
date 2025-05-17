-- CreateTable
CREATE TABLE `User` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `userName` VARCHAR(191) NOT NULL,
    `userSurname` VARCHAR(191) NOT NULL,
    `userCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserContact` (
    `userContactId` INTEGER NOT NULL AUTO_INCREMENT,
    `userContactType` ENUM('EMAIL', 'PHONE', 'SOCIAL') NOT NULL,
    `userContactScope` ENUM('PERSONAL', 'PROFESSIONAL', 'OTHER') NOT NULL,
    `userContactValue` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`userContactId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserAuth` (
    `authId` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `UserAuth_email_key`(`email`),
    UNIQUE INDEX `UserAuth_userId_key`(`userId`),
    PRIMARY KEY (`authId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AdGroup` (
    `adGroupId` INTEGER NOT NULL AUTO_INCREMENT,
    `adGroupName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`adGroupId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserAdGroup` (
    `userAdGroupId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `adGroupId` INTEGER NOT NULL,

    PRIMARY KEY (`userAdGroupId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserContact` ADD CONSTRAINT `UserContact_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAuth` ADD CONSTRAINT `UserAuth_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAdGroup` ADD CONSTRAINT `UserAdGroup_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAdGroup` ADD CONSTRAINT `UserAdGroup_adGroupId_fkey` FOREIGN KEY (`adGroupId`) REFERENCES `AdGroup`(`adGroupId`) ON DELETE RESTRICT ON UPDATE CASCADE;
