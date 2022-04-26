export const ADD_SEARCH_INPUT = 'ADD_SEARCH_INPUT'

export function addSearchInput(data: string): SearchInputType {
  return {
    type: ADD_SEARCH_INPUT,
    payload: data,
  }
}

type SearchInputType = {
  type: typeof ADD_SEARCH_INPUT
  payload: string
}

export type SearchInputActions = ReturnType<typeof addSearchInput>
