import { Box, Skeleton } from '@mui/material'

type LoadingPageProps = {
  type: 'home' | 'country'
}

export default function LoadingPage({ type }: LoadingPageProps) {
  return (
    <>
      {type === 'home' && (
        <>
          {Array.from(Array(6)).map((e, i) => (
            <Box key={i}>
              <Box sx={{ width: '100%' }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Box>
              <br />
              <br />
            </Box>
          ))}
        </>
      )}
      {type === 'country' && (
        <>
          <Skeleton variant="rectangular" width={'100%'} height={300} />
          <br />
          {Array.from(Array(5)).map((e, i) => (
            <Box key={i}>
              <Box sx={{ width: '100%' }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Box>
              <br />
            </Box>
          ))}
        </>
      )}
    </>
  )
}
