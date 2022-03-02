import { GitHub, LinkedIn } from '@mui/icons-material'
import { Typography, Box } from '@mui/material'

import './Footer.scss'

export default function Footer() {
  return (
    <Box className="footer__wrapper">
      <Box className="text__box">
        <Typography className="text" sx={{ fontSize: '20px' }}>
          Developed by
        </Typography>
        <Typography className="text text-name">Hao Phan</Typography>
      </Box>
      <Box className="icon__box" sx={{ display: 'flex', gap: '7px' }}>
        <LinkedIn className="icon icon-linkedin" />
        <GitHub className="icon icon-github" />
      </Box>
    </Box>
  )
}
