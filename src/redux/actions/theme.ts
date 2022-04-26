export const THEME_TOGGLE = 'THEME_TOGGLE'

export function themeToggle(): ThemeToggleType {
  return {
    type: THEME_TOGGLE,
  }
}

type ThemeToggleType = {
  type: typeof THEME_TOGGLE
}

export type ThemeToggleAction = ReturnType<typeof themeToggle>
