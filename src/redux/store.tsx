import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { PaletteMode } from '@mui/material'

import rootReducer, { RootState } from './rootReducer'

// Check stored countries from Local Storage
let storedFavCountries
if (localStorage.getItem('favCountries')) {
  storedFavCountries = JSON.parse(localStorage.getItem('favCountries') || '')
}

// Check theme state from Local Storage
const persistedTheme = localStorage.getItem('theme')

const initialState: RootState = {
  countries: { countries: [], loading: true, error: null },
  country: { loading: true },
  favorite: { favCountries: storedFavCountries ? storedFavCountries : [] },
  search: { inputValue: '' },
  theme: { theme: (persistedTheme ? persistedTheme : 'light') as PaletteMode },
  sort: { value: '' },
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
