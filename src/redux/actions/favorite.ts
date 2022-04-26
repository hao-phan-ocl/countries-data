import { Country } from '../../types'

export const ADD_FAVOURITE = 'ADD_FAVORITE'
export const REMOVE_FAVOURITE = 'REMOVE_FAVORITE'

export function addFavorite(country: Country): AddFavoriteType {
  return {
    type: ADD_FAVOURITE,
    payload: country,
  }
}

export function removeFavorite(country: Country): RemoveFavoriteType {
  return {
    type: REMOVE_FAVOURITE,
    payload: country,
  }
}

type AddFavoriteType = {
  type: typeof ADD_FAVOURITE
  payload: Country
}

type RemoveFavoriteType = {
  type: typeof REMOVE_FAVOURITE
  payload: Country
}

export type FavoriteActions = ReturnType<typeof addFavorite> | ReturnType<typeof removeFavorite>
