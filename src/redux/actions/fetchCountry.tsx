import { Dispatch } from 'redux'

import { Country } from '../../types'
import { RootState } from '../rootReducer'

export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS'
export const FETCH_COUNTRY_FAIL = 'FETCH_COUNTRY_FAIL'

export const COUNTRY_LOADING = 'COUNTRY_LOADING'

type GetState = () => RootState

export function fetchCountry(countryName: string) {
  return async (dispatch: Dispatch, getState: GetState) => {
    const country = getState().country.country

    // Check existed country from Redux to prevent re-fetching
    // Also check case insensitive with param id since it's passed in lowercase
    if (country?.name.common.toLowerCase() === countryName) return

    dispatch(loadingCountry(true))

    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      const data = await res.json()
      dispatch(fetchCountrySuccess(data[0]))
      dispatch(loadingCountry(false))
    } catch (error) {
      dispatch(fetchCountryFail(error as Error))
    }
  }
}

export function loadingCountry(status: boolean): LoadingType {
  return {
    type: COUNTRY_LOADING,
    payload: status,
  }
}

function fetchCountrySuccess(data: Country): FetchCountrySuccessType {
  return {
    type: FETCH_COUNTRY_SUCCESS,
    payload: data,
  }
}

function fetchCountryFail(err: Error): FetchCountryFailType {
  return {
    type: FETCH_COUNTRY_FAIL,
    payload: err,
  }
}

type LoadingType = {
  type: typeof COUNTRY_LOADING
  payload: boolean
}

type FetchCountrySuccessType = {
  type: typeof FETCH_COUNTRY_SUCCESS
  payload: Country
}

type FetchCountryFailType = {
  type: typeof FETCH_COUNTRY_FAIL
  payload: Error
}

export type CountryActions =
  | ReturnType<typeof fetchCountrySuccess>
  | ReturnType<typeof fetchCountryFail>
  | ReturnType<typeof loadingCountry>
