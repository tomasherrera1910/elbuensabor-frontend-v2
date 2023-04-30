import { useState } from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
export default function PasswordTextField ({ name }: { name: string }) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <TextField
      variant='standard' label='Contraseña' name={name} required
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              onClick={() => { setShowPassword(!showPassword) }}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}
