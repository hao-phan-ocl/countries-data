import MuiTableHead from '@mui/material/TableHead'
import { Typography, TableRow, TableCell } from '@mui/material'

export default function TableHead() {
  const headers = ['Flag', 'Name', 'Region', 'Capital', 'Population', 'Favorite']

  return (
    <MuiTableHead>
      <TableRow>
        {headers.map((elem) => (
          <TableCell key={elem}>
            <Typography sx={{ fontWeight: '600' }}>{elem}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  )
}
