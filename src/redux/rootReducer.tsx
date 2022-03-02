import { combineReducers } from 'redux'

import favoriteReducer from './reducers/favorite'
import countriesReducer from './reducers/fetchCountries'
import countryReducer from './reducers/fetchCountry'
import searchReducer from './reducers/search'
import sortReducer from './reducers/sort'
import darkThemeReducer from './reducers/theme'

const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
  favorite: favoriteReducer,
  search: searchReducer,
  theme: darkThemeReducer,
  sort: sortReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
