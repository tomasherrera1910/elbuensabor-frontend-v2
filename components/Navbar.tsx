import { useUserSession } from '@/store/user'
import { AccountCircle, Fastfood, ShoppingCart } from '@mui/icons-material'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'

export default function Navbar () {
  const userInfo = useUserSession(state => state.userInfo)
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ justifyContent: { xs: 'space-between', sm: 'space-around' } }}>
        <Link href='/'>
          <Button startIcon={<Fastfood />} color='inherit'>
            EL BUEN SABOR
          </Button>
        </Link>
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
