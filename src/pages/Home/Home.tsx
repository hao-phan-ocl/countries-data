import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../redux/rootReducer'
import { fetchCountries } from '../../redux/actions/fetchCountries'
import MainLayout from '../../components/MainLayout/MainLayout'

export default function Home() {
  const dispatch = useDispatch()
  const countries = useSelector((state: RootState) => state.countries.countries)

  useEffect(() => {
    dispatch(fetchCountries())
    window.scrollTo(0, 0)
  }, [dispatch])

  return <MainLayout countries={countries} />
}
