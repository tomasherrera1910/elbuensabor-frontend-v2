import { Container, IconButton, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { ArrowBack } from '@mui/icons-material'
import RegisterForm from './RegisterForm'

export default function Register () {
  return (
    <Container maxWidth='xs' sx={{ backgroundColor: '#f0f0f0', py: 4, borderRadius: 2, boxShadow: 16, position: 'relative' }}>
      <Stack gap={1} alignItems='center'>
        <img src='/logo.png' alt='El Buen Sabor Logo' style={{ width: 240 }} />
        <Typography variant='h5' textAlign='center'>
          <strong>Crea tu cuenta</strong>, llenando este formulario
        </Typography>
      </Stack>
      <RegisterForm />
      <Link href='/' style={{ position: 'absolute', top: 2, left: 2 }}>
        <IconButton size='large'>
          <ArrowBack />
        </IconButton>
      </Link>
    </Container>
  )
}
