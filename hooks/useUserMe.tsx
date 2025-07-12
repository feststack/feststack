import type { User, Language, GraphicTheme } from './types'
import { useUser } from './useUser'
import { useLanguages } from './useLanguages'
import { useGraphicTheme } from './useGraphicTheme'

export function useUserMe() {
  const { user: rawUser, loading: userLoading, error: userError } = useUser()
  const user = rawUser ?? null

  const {
    languages,
    loading: langLoading,
    error: langError
  } = useLanguages()

  const {
    theme,
    appName,
    loading: themeLoading
  } = useGraphicTheme()

  const loading = userLoading || langLoading || themeLoading
  const error = userError || langError

  return { user, languages, theme, appName, loading, error }
}
