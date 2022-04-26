import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import CountriesTable from '../../components/CountriesTable/CountriesTable'
import { RootState } from '../../redux/rootReducer'
import SortBar, {
  SORT_CAPITAL_AZ,
  SORT_CAPITAL_ZA,
  SORT_NAME_AZ,
  SORT_NAME_ZA,
  SORT_POPULATION_ASC,
  SORT_POPULATION_DESC,
} from '../../components/SortBar/SortBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Country } from '../../types'
import TableHead from '../TableHead/TableHead'

type MainLayoutType = {
  countries: Country[]
}

export default function MainLayout({ countries }: MainLayoutType) {
  const searchInput = useSelector((state: RootState) => state.search.inputValue)
  const sortType = useSelector((state: RootState) => state.sort.value)
  const favCountries = useSelector((state: RootState) => state.favorite.favCountries)
  const location = useLocation()

  function handleSearch() {
    if (searchInput === '') {
      return countries
    }
    return countries.filter((elem) =>
      elem.name.common.toUpperCase().startsWith(searchInput.toUpperCase())
    )
  }

  function handleSort(data: Country[]) {
    if (sortType === '') {
      return data
    } else if (sortType === SORT_NAME_AZ) {
      return data.sort((a, b) => a.name.common.localeCompare(b.name.common))
    } else if (sortType === SORT_NAME_ZA) {
      return data.sort((a, b) => b.name.common.localeCompare(a.name.common))
    } else if (sortType === SORT_CAPITAL_AZ) {
      return data.sort((a, b) => (a.capital?.[0] || 'ZZZZ').localeCompare(b.capital?.[0] || 'ZZZZ'))
    } else if (sortType === SORT_CAPITAL_ZA) {
      return data.sort((a, b) => (b.capital?.[0] || 'ZZZZ').localeCompare(a.capital?.[0] || 'ZZZZ'))
    } else if (sortType === SORT_POPULATION_ASC) {
      return countries.sort((a, b) => a.population - b.population)
    } else if (sortType === SORT_POPULATION_DESC) {
      return countries.sort((a, b) => b.population - a.population)
    }
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '150px',
        height: '100%',
      }}
    >
      <Typography mb={8} variant="h1" sx={{ textShadow: '#000 0 0 3px' }}>
        {location.pathname === '/' ? 'Countries Data' : 'Your List'}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          width: '100%',
        }}
      >
        <SearchBar />
        <SortBar />
      </Box>
      {location.pathname === '/favorite' && !favCountries.length ? (
        <TableContainer>
          <Paper elevation={10}>
            <Table sx={{ mt: '20px' }}>
              <TableHead />
              <TableBody>
                <TableRow>
                  <TableCell sx={{ borderBottom: '0' }}>
                    <Typography>Your list is empty!</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </TableContainer>
      ) : (
        <CountriesTable countries={handleSort(handleSearch())} />
      )}
    </Container>
  )
}
