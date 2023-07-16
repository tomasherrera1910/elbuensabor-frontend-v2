import { Container, useMediaQuery, useTheme } from '@mui/material'

export default function Addresses () {
  const theme = useTheme()
  const xlScreen = useMediaQuery(theme.breakpoints.up('xl'))
  return (
    <Container maxWidth={xlScreen ? 'lg' : 'md'}>
      Direcciones
    </Container>
  )
}
