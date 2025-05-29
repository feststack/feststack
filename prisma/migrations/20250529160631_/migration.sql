/*
  Warnings:

  - A unique constraint covering the columns `[appConfigName]` on the table `AppConfigs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[graphicThemeName]` on the table `GraphicThemes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `AppConfigs_appConfigName_key` ON `AppConfigs`(`appConfigName`);

-- CreateIndex
CREATE UNIQUE INDEX `GraphicThemes_graphicThemeName_key` ON `GraphicThemes`(`graphicThemeName`);
