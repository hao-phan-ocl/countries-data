import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import { AppBar, Badge, Box, IconButton } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../redux/rootReducer'
import SwitchButton from '../SwitchButton/SwitchButton'
import { addSearchInput } from '../../redux/actions/search'

export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const favCountries = useSelector((state: RootState) => state.favorite.favCountries)

  function handleFavoriteClick() {
    navigate('/favorite')
    dispatch(addSearchInput(''))
  }

  return (
    <AppBar
      position="absolute"
      color="transparent"
      sx={{
        height: '70px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <IconButton color="primary" onClick={() => navigate('/')}>
          <HomeIcon fontSize="large" />
        </IconButton>
        <IconButton color="primary" onClick={handleFavoriteClick}>
          <Badge badgeContent={favCountries.length} color="error">
            <NotificationsIcon fontSize="large" />
          </Badge>
        </IconButton>
        <SwitchButton />
      </Box>
    </AppBar>
  )
}
