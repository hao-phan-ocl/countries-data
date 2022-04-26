import { useSelector } from 'react-redux'

import { RootState } from '../../redux/rootReducer'
import MainLayout from '../../components/MainLayout/MainLayout'

export default function Favorite() {
  const favCountries = useSelector((state: RootState) => state.favorite.favCountries)

  return <MainLayout countries={favCountries} />
}
