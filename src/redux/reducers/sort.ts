import { SORT_NAME_AZ } from '../../components/SortBar/SortBar'
import { SortAction, SORTING } from '../actions/sort'

export type InitialState = {
  value: string
}

const initialState: InitialState = {
  value: SORT_NAME_AZ,
}

function sortReducer(state = initialState, action: SortAction): InitialState {
  switch (action.type) {
    case SORTING:
      return {
        ...state,
        value: action.payload,
      }
    default:
      return state
  }
}

export default sortReducer
