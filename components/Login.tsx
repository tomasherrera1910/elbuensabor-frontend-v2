import { Container, Stack, TextField, Button, Divider, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import PasswordTextField from './PasswordTextField'

export default function Login () {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const formData = new FormData(evt.target as HTMLFormElement)
    const email = formData.get('email')
    const password = formData.get('password')
    console.log({ email, password })
  }
  return (
    <Container maxWidth='xs' sx={{ backgroundColor: '#f0f0f0', py: 8, borderRadius: 2, boxShadow: 16 }}>
      <Stack alignItems='center' justifyContent='center' gap={4}>
        <img src='/logo.png' alt='El Buen Sabor Logo' style={{ width: 240 }} />
        <form onSubmit={(evt) => { handleSubmit(evt) }}>
          <Stack gap={2}>
            <TextField variant='standard' name='email' label='Email' placeholder='Johndoe@mail.com' required />
            <PasswordTextField />
            <Stack gap={1} divider={<Divider orientation='horizontal' flexItem />}>
              <Button variant='contained' color='primary' type='submit'>
                Iniciar Sesión
              </Button>
              <Button variant='outlined' color='primary' startIcon={<GoogleIcon />}>
                Iniciar Sesión con Google
              </Button>
              <Stack gap={1}>
                <Typography textAlign='center' variant='subtitle1' color='GrayText'>
                  ¿Eres nuevo?
                </Typography>
                <Button variant='outlined' color='info'>
                  Crea tu cuenta
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Container>
  )
}
