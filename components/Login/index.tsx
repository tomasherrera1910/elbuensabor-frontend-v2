import { Container, Stack, Button, Divider, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import Link from 'next/link'
import LoginForm from './LoginForm'

export default function Login () {
  return (
    <Container maxWidth='xs' sx={{ backgroundColor: '#f0f0f0', py: 8, borderRadius: 2, boxShadow: 16 }}>
      <Stack alignItems='center' justifyContent='center' gap={4}>
        <img src='/logo.png' alt='El Buen Sabor Logo' style={{ width: 240 }} />
        <Stack gap={2}>
          <LoginForm />
          <Stack gap={1} divider={<Divider orientation='horizontal' flexItem />}>
            <Button variant='outlined' color='primary' startIcon={<GoogleIcon />}>
              Iniciar Sesión con Google
            </Button>
            <Stack gap={1}>
              <Typography textAlign='center' variant='subtitle1' color='GrayText'>
                ¿Sos nuevo?
              </Typography>
              <Link href='/registro'>
                <Button variant='text' color='info' sx={{ width: '100%' }}>
                  Creá tu cuenta
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
