import { GitHub, LinkedIn } from '@mui/icons-material'
import { Typography, Box, Link } from '@mui/material'

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
        <Link
          href="https://www.linkedin.com/in/hao-phan-06b628110/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn className="icon icon-linkedin" />
        </Link>
        <Link
          href="https://github.com/nguyenhaophan/countries-data"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub className="icon icon-github" />
        </Link>
      </Box>
    </Box>
  )
}
