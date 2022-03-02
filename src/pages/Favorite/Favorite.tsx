import { useSelector } from 'react-redux'

import MainLayout from '../../components/MainLayout/MainLayout'
import { RootState } from '../../redux/rootReducer'

export default function Favorite() {
  const favCountries = useSelector((state: RootState) => state.favorite.favCountries)

  return <MainLayout countries={favCountries} />
}
