import { Dispatch } from 'redux'

import { Country } from '../../types'
import { RootState } from '../rootReducer'

export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_FAIL = 'FETCH_COUNTRIES_FAIL'

export const COUNTRIES_LOADING = 'COUNTRIES_LOADING'

type GetState = () => RootState

export function fetchCountries() {
  return async (dispatch: Dispatch, getState: GetState) => {
    const countries = getState().countries.countries

    // Check countries to prevent re-fetching when refreshing page
    if (countries.length) return

    try {
      const res = await fetch('https://restcountries.com/v3.1/all')
      const data = await res.json()

      dispatch(fetchCountriesSuccess(data))
      dispatch(loadingCountries(false))
    } catch (error) {
      dispatch(fetchCountriesFail(error as Error))
    }
  }
}

export function loadingCountries(status: boolean): LoadingType {
  return {
    type: COUNTRIES_LOADING,
    payload: status,
  }
}

function fetchCountriesSuccess(data: Country[]): FetchCountriesSuccessType {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: data,
  }
}

function fetchCountriesFail(err: Error): FetchCountriesFailType {
  return {
    type: FETCH_COUNTRIES_FAIL,
    payload: err,
  }
}

type LoadingType = {
  type: typeof COUNTRIES_LOADING
  payload: boolean
}

type FetchCountriesSuccessType = {
  type: typeof FETCH_COUNTRIES_SUCCESS
  payload: Country[]
}

type FetchCountriesFailType = {
  type: typeof FETCH_COUNTRIES_FAIL
  payload: Error
}

export type CountriesActions =
  | ReturnType<typeof fetchCountriesSuccess>
  | ReturnType<typeof fetchCountriesFail>
  | ReturnType<typeof loadingCountries>
