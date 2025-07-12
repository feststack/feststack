-- AlterTable
ALTER TABLE `Users` ADD COLUMN `graphicThemeId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_graphicThemeId_fkey` FOREIGN KEY (`graphicThemeId`) REFERENCES `GraphicThemes`(`graphicThemeId`) ON DELETE SET NULL ON UPDATE CASCADE;
