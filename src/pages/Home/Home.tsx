import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCountries } from '../../redux/actions/fetchCountries'
import { RootState } from '../../redux/rootReducer'
import MainLayout from '../../components/MainLayout/MainLayout'

export default function Home() {
  const dispatch = useDispatch()
  const countries = useSelector((state: RootState) => state.countries.countries)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  return <MainLayout countries={countries} />
}
