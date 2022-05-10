import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { createTheme, PaletteMode, ThemeProvider, Paper, Stack } from '@mui/material'
import { useMemo } from 'react'
import { grey } from '@mui/material/colors'

import { RootState } from './redux/rootReducer'
import CountryDetail from './pages/CountryDetail/CountryDetail'
import Home from './pages/Home/Home'
import Favorite from './pages/Favorite/Favorite'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

function App() {
  const themeState = useSelector((state: RootState) => state.theme.theme)

  const getDesignTokens = (themeState: PaletteMode) => ({
    palette: {
      themeState,
      ...(themeState === 'light'
        ? {
            // palette values for light mode
            primary: {
              main: grey[900],
            },
            background: {
              paper: 'rgba(0, 0, 0, 0.08)',
            },
            text: {
              primary: grey[900],
            },
          }
        : {
            // palette values for dark mode
            transitions: {
              duration: {
                standard: 1000,
              },
            },
            primary: {
              main: '#fff',
            },
            background: {
              paper: 'rgba(0, 0, 0, 0.70)',
            },
            text: {
              primary: '#fff',
            },
          }),
    },
  })

  const theme = useMemo(() => createTheme(getDesignTokens(themeState)), [themeState])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Paper
          sx={{
            transition: '.5s',
          }}
        >
          <Stack minHeight="100vh">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/countries/:countryName" element={<CountryDetail />} />
            </Routes>
            <Footer />
          </Stack>
        </Paper>
      </Router>
    </ThemeProvider>
  )
}

export default App
