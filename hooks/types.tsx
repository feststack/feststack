export type User = {
  userFirstName: string
  userLastName: string
  userCode: string
  language: {
    id: number
    name: string
    code: string
  } | null
  isActive: boolean
  adGroupAccess: Record<string, string[]>
  graphicThemeId: number | null
  graphicThemeName: string | null
}

export interface Language {
  languageId: number
  languageName: string
  languageCode: string
}

export interface ImageData {
  id: number
  imageName: string
  mimeType: string
}

export interface GraphicTheme {
  graphicThemeName: string
  backgroundMain: string
  backgroundSecondary: string
  textPrimary: string
  textSecondary: string
  accent: string
  accentHover: string
  success: string
  cardBackground: string
  borderColor: string
  logoImage?: ImageData | null
  backgroundImage?: ImageData | null
}

export interface AppConfig {
  appConfigName: string
  appConfigValue: string
}
