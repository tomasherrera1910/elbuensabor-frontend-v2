import { useUserSession } from '@/store/user'
import { AccountCircle, Fastfood, ShoppingCart } from '@mui/icons-material'
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material'

export default function Navbar () {
  const userInfo = useUserSession(state => state.userInfo)
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: 'space-around' }}>
        <Stack direction='row' gap={1} alignItems='center'>
          <Fastfood />
          <Typography border='GrayText'>EL BUEN SABOR</Typography>
        </Stack>
        <Stack direction='row' gap={2}>
          <Stack direction='row' alignItems='center' gap={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <AccountCircle />
            <Typography>{userInfo?.username}</Typography>
          </Stack>
          <IconButton color='inherit'>
            <ShoppingCart />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
