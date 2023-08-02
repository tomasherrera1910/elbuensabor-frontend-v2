import { useUserSession } from '@/store/user'
import { AccountCircle, Fastfood, Menu, ShoppingCart } from '@mui/icons-material'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import Sidebar from './Sidebar'
import { useState } from 'react'
import Cart from './Cart'
import { useCart } from '@/store/cart'

export default function Navbar () {
  const userInfo = useUserSession(state => state.userInfo)
  const [open, isOpen] = useState(false)
  const { cart } = useCart()
  const totalQuantity = cart.reduce((prevValue, current) => {
    return prevValue + current.quantity
  }, 0)
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
            <IconButton color='inherit' onClick={handleCart} sx={{ position: 'relative' }}>
              <ShoppingCart />
              {cart.length > 0 && <div style={{ position: 'absolute', bottom: 0, right: 0, width: '16px', height: '16px', borderRadius: '9999px', backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '8px' }}>{totalQuantity}</div>}
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} handleClose={handleSidebar} />
      <Cart open={openCart} handleClose={handleCart} />
    </>
  )
}
