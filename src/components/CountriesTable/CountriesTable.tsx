import { Paper, Table, TableContainer } from '@mui/material'

import TableBody from '../TableBody/TableBody'
import TableHead from '../TableHead/TableHead'
import { Country } from '../../types'

type CountriesTableProps = {
  countries?: Country[]
}

export default function CountriesTable({ countries }: CountriesTableProps) {
  return (
    <TableContainer>
      <Paper elevation={3}>
        <Table sx={{ mt: '20px' }}>
          <TableHead />
          <TableBody countries={countries} />
        </Table>
      </Paper>
    </TableContainer>
  )
}
