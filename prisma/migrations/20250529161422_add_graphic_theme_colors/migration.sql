/*
  Warnings:

  - You are about to drop the column `color1` on the `GraphicThemes` table. All the data in the column will be lost.
  - You are about to drop the column `color2` on the `GraphicThemes` table. All the data in the column will be lost.
  - You are about to drop the column `color3` on the `GraphicThemes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `GraphicThemes` DROP COLUMN `color1`,
    DROP COLUMN `color2`,
    DROP COLUMN `color3`,
    ADD COLUMN `accent` VARCHAR(191) NULL,
    ADD COLUMN `accentHover` VARCHAR(191) NULL,
    ADD COLUMN `backgroundMain` VARCHAR(191) NULL,
    ADD COLUMN `backgroundSecondary` VARCHAR(191) NULL,
    ADD COLUMN `borderColor` VARCHAR(191) NULL,
    ADD COLUMN `cardBackground` VARCHAR(191) NULL,
    ADD COLUMN `success` VARCHAR(191) NULL,
    ADD COLUMN `textPrimary` VARCHAR(191) NULL,
    ADD COLUMN `textSecondary` VARCHAR(191) NULL;
