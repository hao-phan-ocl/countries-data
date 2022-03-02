import { ADD_SEARCH_INPUT, SearchInputActions } from '../actions/search'

export type InitialState = {
  inputValue: string
}

const initialState: InitialState = {
  inputValue: '',
}

function searchReducer(state = initialState, action: SearchInputActions): InitialState {
  switch (action.type) {
    case ADD_SEARCH_INPUT:
      return {
        ...state,
        inputValue: action.payload,
      }

    default:
      return state
  }
}

export default searchReducer
