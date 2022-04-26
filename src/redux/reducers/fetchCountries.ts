import {
  CountriesActions,
  FETCH_COUNTRIES_FAIL,
  FETCH_COUNTRIES_SUCCESS,
  COUNTRIES_LOADING,
} from '../actions/fetchCountries'
import { Country } from '../../types'

export type InitialState = {
  countries: Country[]
  loading: boolean
  error: null | Error
}

const initialState: InitialState = {
  countries: [],
  loading: true,
  error: null,
}

function countriesReducer(state = initialState, action: CountriesActions): InitialState {
  switch (action.type) {
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
      }

    case FETCH_COUNTRIES_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case COUNTRIES_LOADING:
      return {
        ...state,
        loading: action.payload,
      }

    default:
      return state
  }
}

export default countriesReducer
