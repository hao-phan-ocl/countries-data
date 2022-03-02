import {
  CountryActions,
  FETCH_COUNTRY_FAIL,
  FETCH_COUNTRY_SUCCESS,
  COUNTRY_LOADING,
} from '../actions/fetchCountry'
import { Country } from '../../types'

export type InitialState = {
  country?: Country
  loading: boolean
  error?: Error
}

const initialState: InitialState = {
  loading: true,
}

function countryReducer(state = initialState, action: CountryActions): InitialState {
  switch (action.type) {
    case FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        country: action.payload,
      }

    case FETCH_COUNTRY_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case COUNTRY_LOADING:
      return {
        ...state,
        loading: action.payload,
      }

    default:
      return state
  }
}

export default countryReducer
