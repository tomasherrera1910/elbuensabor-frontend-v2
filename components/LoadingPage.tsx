import { Container, Stack, Typography } from '@mui/material'

export default function LoadingPage () {
  return (
    <Container maxWidth='sm'>
      <Stack justifyContent='center' alignItems='center' gap={2}>
        <img src='/logo.png' width={280} />
        <Typography variant='h3'>Cargando...</Typography>
      </Stack>
    </Container>
  )
}
