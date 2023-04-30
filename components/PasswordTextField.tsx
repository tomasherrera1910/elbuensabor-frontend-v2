import { useState } from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'

interface Props {
  name: string
  label: string
  value: string
  handleChange: any
  handleBlur: any
  color: 'primary' | 'error'
  error?: boolean
  helperText?: string | false
}
export default function PasswordTextField ({ name, label, value, handleChange, handleBlur, color, error, helperText }: Props) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <TextField
      variant='standard' label={label} name={name} value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      color={color}
      error={error}
      helperText={helperText}
      type={showPassword ? 'text' : 'password'}
      required
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
