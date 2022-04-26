import MuiTableBody from '@mui/material/TableBody'
import { useSelector } from 'react-redux'
import { Link, Typography, TableRow, TableCell } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { pink } from '@mui/material/colors'

import MyButton from '../MyButton/MyButton'
import { Country } from '../../types'
import { RootState } from '../../redux/rootReducer'
import LoadingPage from '../LoadingPage/LoadingPage'

type TableBodyProps = {
  countries?: Country[]
}

export default function TableBody({ countries }: TableBodyProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const loading = useSelector((state: RootState) => state.countries.loading)

  function handleOnClick(link: string) {
    navigate(`/countries/${link}`)
  }

  return (
    <MuiTableBody>
      {loading && location.pathname !== '/favorite' ? (
        <TableRow>
          {Array.from(Array(6)).map((e, i) => (
            <TableCell key={i}>
              <LoadingPage type="home" />
            </TableCell>
          ))}
        </TableRow>
      ) : (
        countries?.map((country) => (
          <TableRow key={country.name.common}>
            <TableCell>
              <img
                className="flag"
                style={{ width: '50px' }}
                src={country.flags.svg}
                alt={'Flag'}
              />
            </TableCell>
            <TableCell>
              <Link
                onClick={() => handleOnClick(country.name.common.toLowerCase())}
                underline="none"
                color="inherit"
              >
                <Typography
                  sx={{
                    cursor: 'pointer',
                    transition: '.5s',
                    ':hover': { color: pink[500] },
                  }}
                  className="name"
                  variant="h6"
                >
                  {country.name.common}
                </Typography>
              </Link>
            </TableCell>
            <TableCell>{country.region}</TableCell>
            <TableCell>{country.capital ? country.capital : 'NO CAPITAL'}</TableCell>
            <TableCell>{country.population.toLocaleString('en')}</TableCell>
            <TableCell>
              <MyButton country={country} type="small" />
            </TableCell>
          </TableRow>
        ))
      )}
    </MuiTableBody>
  )
}
