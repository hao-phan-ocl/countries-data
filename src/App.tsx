import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { createTheme, PaletteMode, ThemeProvider, Paper } from '@mui/material'
import { useMemo } from 'react'
import { grey } from '@mui/material/colors'

import CountryDetail from './pages/CountryDetail/CountryDetail'
import Home from './pages/Home/Home'
import Favorite from './pages/Favorite/Favorite'
import Nav from './components/Nav/Nav'
import { RootState } from './redux/rootReducer'
import Footer from './components/Footer/Footer'
import './App.scss'

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
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/countries/:countryName" element={<CountryDetail />} />
          </Routes>
          <Footer />
        </Paper>
      </Router>
    </ThemeProvider>
  )
}

export default App
