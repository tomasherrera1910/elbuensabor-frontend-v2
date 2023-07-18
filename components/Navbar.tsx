import { useUserSession } from '@/store/user'
import { AccountCircle, Fastfood, Menu, ShoppingCart } from '@mui/icons-material'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import Sidebar from './Sidebar'
import { useState } from 'react'
import Cart from './Cart'

export default function Navbar () {
  const userInfo = useUserSession(state => state.userInfo)
  const [open, isOpen] = useState(false)
  const handleSidebar = () => { isOpen(!open) }
  const [openCart, isOpenCart] = useState(false)
  const handleCart = () => { isOpenCart(!openCart) }
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar sx={{ justifyContent: { xs: 'space-between', md: 'space-around' }, paddingLeft: { xs: 0, md: 30, lg: 10, xl: 0 } }}>
          <Stack flexDirection='row'>
            <IconButton onClick={handleSidebar} color='inherit' sx={{ display: { xs: 'flex', md: 'none' } }}>
              <Menu />
            </IconButton>
            <Link href='/'>
              <Button startIcon={<Fastfood />} color='inherit'>
                EL BUEN SABOR
              </Button>
            </Link>
          </Stack>
          <Stack direction='row' gap={2}>
            <Stack direction='row' alignItems='center' gap={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <AccountCircle />
              <Typography>{userInfo?.username}</Typography>
            </Stack>
            <IconButton color='inherit' onClick={handleCart}>
              <ShoppingCart />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} handleClose={handleSidebar} />
      <Cart open={openCart} handleClose={handleCart} />
    </>
  )
}
