import { Country } from '../../types'
import { ADD_FAVOURITE, FavoriteActions, REMOVE_FAVOURITE } from '../actions/favorite'

export type InitialState = {
  favCountries: Country[]
}

const initialState: InitialState = {
  favCountries: [],
}

function favoriteReducer(state = initialState, action: FavoriteActions): InitialState {
  switch (action.type) {
    case ADD_FAVOURITE:
      const existed = state.favCountries.find((elem) => elem.name.common === action.payload.name.common)

      if (existed) {
        return state
      }

      return {
        ...state,
        favCountries: [...state.favCountries, action.payload],
      }
    case REMOVE_FAVOURITE:
      const filtered = state.favCountries.filter((elem) => elem.name.common !== action.payload.name.common)
      return {
        ...state,
        favCountries: filtered,
      }
    default:
      return state
  }
}

export default favoriteReducer
