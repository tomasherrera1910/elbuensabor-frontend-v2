import { Button, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'

export default function NotFound () {
  return (
    <Container>
      <Stack justifyContent='center' alignItems='center' gap={4}>
        <img src='/logo.png' width={260} style={{ padding: '16px 0' }} />
        <Typography variant='h1' textAlign='center'>
          ¡404!
        </Typography>
        <Typography textAlign='center'>
          La página a la que desea acceder no existe o no tiene acceso.
        </Typography>
        <Link href='/'>
          <Button>Volver a Login/Inicio</Button>
        </Link>
      </Stack>
    </Container>
  )
}
