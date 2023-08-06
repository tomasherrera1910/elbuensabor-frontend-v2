import { useUserSession } from '@/store/user'
import { getInfo } from '@/utils/CRUDActions'
import { type Address } from '@/utils/types'
import { CircularProgress, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'

export default function Addresses () {
  const theme = useTheme()
  const xlScreen = useMediaQuery(theme.breakpoints.up('xl'))
  const userInfo = useUserSession(state => state.userInfo)
  const [addresses, setAddresses] = useState<Address[]>([])
  const [loading, isLoading] = useState(false)
  useEffect(() => {
    isLoading(true)
    getInfo(`addresses/${userInfo?.id ?? ''}`)
      .then(setAddresses)
      .catch((e) => { console.error(e) })
      .finally(() => { isLoading(false) })
  }, [userInfo])
  return (
    <Container maxWidth={xlScreen ? 'lg' : 'md'}>
      <Stack flexDirection='column'>
        Direcciones
        {loading && <CircularProgress />}
        {!loading && addresses.length < 1 && <Typography>No hay direcciones asociadas a este usuario.</Typography>}
        {addresses.length > 1 && addresses.map((address) => (
          <Typography key={address.id}>
            {address.calle} - {String(address.numero)} ({address.localidad})
          </Typography>
        ))}
      </Stack>
    </Container>
  )
}
