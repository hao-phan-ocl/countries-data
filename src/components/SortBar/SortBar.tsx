import { useDispatch, useSelector } from 'react-redux'
import { NativeSelect, InputLabel, FormControl } from '@mui/material'

import { updateSort } from '../../redux/actions/sort'
import { RootState } from '../../redux/rootReducer'

export const SORT_NAME_AZ = 'SORT_NAME_AZ'
export const SORT_NAME_ZA = 'SORT_NAME_ZA'
export const SORT_CAPITAL_AZ = 'SORT_CAPITAL_AZ'
export const SORT_CAPITAL_ZA = 'SORT_CAPITAL_ZA'
export const SORT_POPULATION_DESC = 'SORT_POPULATION_DESC'
export const SORT_POPULATION_ASC = 'SORT_POPULATION_ASC'

export default function SortBar() {
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.theme.theme)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateSort(event.target.value))
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 80, right: '0', position: 'absolute' }}>
      <InputLabel
        variant="standard"
        htmlFor="uncontrolled-native"
        sx={{ color: theme === 'dark' ? 'white' : 'gray' }}
      >
        Sort
      </InputLabel>
      <NativeSelect
        inputProps={{
          name: 'sort-options',
          id: 'uncontrolled-native',
        }}
        onChange={handleChange}
      >
        <option value={''}></option>
        <option value={SORT_NAME_AZ}>Name (A-Z)</option>
        <option value={SORT_NAME_ZA}>Name (Z-A)</option>
        <option value={SORT_CAPITAL_AZ}>Capital (A-Z)</option>
        <option value={SORT_CAPITAL_ZA}>Capital (Z-A)</option>
        <option value={SORT_POPULATION_DESC}>Population (desc)</option>
        <option value={SORT_POPULATION_ASC}>Population (asc)</option>
      </NativeSelect>
    </FormControl>
  )
}
