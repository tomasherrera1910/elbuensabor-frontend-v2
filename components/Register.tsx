import { Button, Container, IconButton, Stack, TextField, Typography } from '@mui/material'
import PasswordTextField from './PasswordTextField'
import Link from 'next/link'
import { ArrowBack } from '@mui/icons-material'

export default function Register () {
  return (
    <Container maxWidth='xs' sx={{ backgroundColor: '#f0f0f0', py: 4, borderRadius: 2, boxShadow: 16, position: 'relative' }}>
      <Stack gap={1} alignItems='center'>
        <img src='/logo.png' alt='El Buen Sabor Logo' style={{ width: 240 }} />
        <Typography variant='h5' textAlign='center'>
          <strong>Crea tu cuenta</strong>, llenando este formulario
        </Typography>
      </Stack>
      <form>
        <Stack gap={2}>
          <TextField variant='standard' name='name' label='Nombre' placeholder='Johndoe@mail.com' required />
          <TextField variant='standard' name='surname' label='Apellido' placeholder='Johndoe@mail.com' required />
          <TextField variant='standard' name='username' label='Email' placeholder='Johndoe@mail.com' required />
          <TextField variant='standard' name='phone' label='Teléfono' placeholder='Johndoe@mail.com' required />
          <PasswordTextField name='password' />
          <PasswordTextField name='confirmPassword' />
          <Button variant='contained'>
            Registrarme
          </Button>
          <Link href='/' style={{ position: 'absolute', top: 2, left: 2 }}>
            <IconButton size='large'>
              <ArrowBack />
            </IconButton>
          </Link>
        </Stack>
      </form>
    </Container>
  )
}
