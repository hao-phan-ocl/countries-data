import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import { Button, IconButton, Typography } from '@mui/material'
import { pink } from '@mui/material/colors'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addFavorite, removeFavorite } from '../../redux/actions/favorite'
import { RootState } from '../../redux/rootReducer'
import { Country } from '../../types'
import { addSearchInput } from '../../redux/actions/search'

type MyButtonProps = {
  country?: Country
  type: 'large' | 'small' | 'back'
}

export default function MyButton({ country, type }: MyButtonProps) {
  const dispatch = useDispatch()
  const likedCountries = useSelector((state: RootState) => state.favorite.favCountries)
  const navigate = useNavigate()

  const liked = likedCountries.find((elem) => elem.name?.common === country?.name?.common)

  function handleAdd() {
    if (country) {
      if (liked) {
        dispatch(removeFavorite(country))
      } else {
        dispatch(addFavorite(country))
      }
    }
  }

  function handleBack() {
    navigate('/')
    // clear search input
    dispatch(addSearchInput(''))
  }

  return (
    <>
      {type === 'small' && (
        <IconButton sx={{ color: liked ? pink[500] : 'gray' }} onClick={handleAdd}>
          <ThumbUpIcon />
        </IconButton>
      )}
      {type === 'large' && (
        <Button
          sx={{ width: '100%' }}
          variant="contained"
          color="primary"
          startIcon={
            <ThumbUpIcon
              sx={{
                color: liked ? pink[500] : 'primary',
              }}
            />
          }
          onClick={handleAdd}
        >
          <Typography>{liked ? 'Remove' : 'Add'}</Typography>
        </Button>
      )}
      {type === 'back' && (
        <Button
          sx={{ width: '100%' }}
          variant="contained"
          color="primary"
          startIcon={<KeyboardReturnIcon />}
          onClick={handleBack}
        >
          <Typography>Back</Typography>
        </Button>
      )}
    </>
  )
}
