import { useParams } from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  Container,
  Box,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'

import MyButton from '../../components/MyButton/MyButton'
import { RootState } from '../../redux/rootReducer'
import { fetchCountry } from '../../redux/actions/fetchCountry'
import LoadingPage from '../../components/LoadingPage/LoadingPage'

export default function CountryDetail() {
  const { countryName } = useParams()
  const dispatch = useDispatch()
  const { country, loading } = useSelector((state: RootState) => state.country)

  useEffect(() => {
    dispatch(fetchCountry(countryName as string))
    window.scrollTo(0, 0)
  }, [countryName, dispatch])

  return (
    <Container maxWidth="sm" sx={{ paddingTop: '150px' }}>
      {loading ? (
        <LoadingPage type="country" />
      ) : (
        <>
          <img
            src={country?.flags.svg}
            alt={country?.name.common}
            style={{ width: '100%', borderRadius: '10px 10px 0 0' }}
          />

          <Paper sx={{ display: 'flex', justifyContent: 'center', padding: '7px 0' }}>
            <Typography variant="h5" color="text.primary" textAlign={'center'} fontWeight={600}>
              {country?.name.common}
            </Typography>
          </Paper>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Capital</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{country?.capital ? country.capital : 'NO CAPITAL'}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Area</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {country?.area.toLocaleString('en')} km<sup>2</sup>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Languages</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {country?.languages &&
                Object.values(country.languages).map((elem) => (
                  <Typography key={country.name.common + elem}>{elem}</Typography>
                ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Borders</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {country?.borders ? (
                country.borders.map((elem) => (
                  <Typography key={country.name.common + elem}>{elem}</Typography>
                ))
              ) : (
                <Typography>NO BORDERS</Typography>
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Population</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{country?.population.toLocaleString('en')}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Currencies</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {country?.currencies &&
                Object.values(country.currencies).map((elem) => (
                  <Typography key={country.name.common + elem.name}>{elem.name}</Typography>
                ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Time Zones</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {country?.timezones.map((elem) => (
                <Typography key={country.name.common + elem}>{elem}</Typography>
              ))}
            </AccordionDetails>
          </Accordion>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
              mt: '5px',
            }}
          >
            <MyButton country={country} type="large" />
            <MyButton type="back" />
          </Box>
        </>
      )}
    </Container>
  )
}
