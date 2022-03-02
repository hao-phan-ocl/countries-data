import { createContext, useState } from 'react'

type ThemeContextType = {
  theme: string
  themeToggle: () => void
}

const initialState = {
  theme: '',
  themeToggle: () => {},
}

export const ThemeContext = createContext<ThemeContextType>(initialState)

type ContextProviderProps = {
  children: React.ReactNode
}

export function ContextProvider({ children }: ContextProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  function themeToggle() {
    setTheme(theme === 'light' ? 'dark' : 'light')
    localStorage.setItem('theme', theme)
  }

  return <ThemeContext.Provider value={{ theme, themeToggle }}>{children}</ThemeContext.Provider>
}
