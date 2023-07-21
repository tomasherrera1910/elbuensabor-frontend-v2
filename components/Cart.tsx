import { useCart } from '@/store/cart'
import { Cancel } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Drawer, IconButton, Typography, useTheme } from '@mui/material'

export default function Cart ({ open, handleClose }: { open: boolean, handleClose: () => void }) {
  const theme = useTheme()
  const cart = useCart(state => state.cart)
  return (
    <Drawer variant='temporary' open={open} onClose={handleClose} anchor='right' PaperProps={{ sx: { backgroundColor: theme.palette.primary.main, color: '#fff', paddingTop: { md: 8 }, paddingX: 4 } }}>
      <IconButton onClick={handleClose}>
        <Cancel />
      </IconButton>
      {cart.length < 1 && <Typography>No hay productos aún en el carrito.</Typography>}
      {cart.map(({ item, quantity }) => (
        <Card key={item.denominacion}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {item.denominacion}
            </Typography>
            <Typography variant='h6' color='text.secondary'>
              $ {item.precioVenta}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Drawer>
  )
}
