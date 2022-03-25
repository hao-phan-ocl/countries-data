import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { PaletteMode } from '@mui/material'
import thunk from 'redux-thunk'

import rootReducer, { RootState } from './rootReducer'
import { SORT_NAME_AZ } from '../components/SortBar/SortBar'
import { Country } from '../types'

// Check stored countries from Local Storage
let storedFavCountries: Country[]

if (localStorage.getItem('favCountries')) {
  storedFavCountries = JSON.parse(localStorage.getItem('favCountries') || '')
} else storedFavCountries = []

// Check theme state from Local Storage
let persistedTheme: PaletteMode

if (localStorage.getItem('theme')) {
  persistedTheme = localStorage.getItem('theme') as PaletteMode
} else persistedTheme = 'light'

const initialState: RootState = {
  countries: { countries: [], loading: true, error: null },
  country: { loading: true },
  favorite: { favCountries: storedFavCountries },
  search: { inputValue: '' },
  theme: { theme: persistedTheme },
  sort: { value: SORT_NAME_AZ },
}

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
  // Favorite State
  const favoriteState = store.getState().favorite.favCountries
  localStorage.setItem('favCountries', JSON.stringify(favoriteState))

  // Theme State
  const theme = store.getState().theme.theme
  localStorage.setItem('theme', theme)
})

export default store
