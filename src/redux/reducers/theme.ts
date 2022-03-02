import { PaletteMode } from '@mui/material'

import { THEME_TOGGLE, ThemeToggleAction } from '../actions/theme'

type InitialState = {
  theme: PaletteMode
}

const initialState: InitialState = {
  theme: 'light',
}

function darkThemeReducer(state = initialState, action: ThemeToggleAction): InitialState {
  switch (action.type) {
    case THEME_TOGGLE:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      }
    default:
      return state
  }
}

export default darkThemeReducer
