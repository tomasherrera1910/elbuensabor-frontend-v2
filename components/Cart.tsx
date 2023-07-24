import { useCart } from '@/store/cart'
import { Add, Cancel, Remove } from '@mui/icons-material'
import { Card, CardContent, Drawer, IconButton, Stack, Typography, useTheme } from '@mui/material'

export default function Cart ({ open, handleClose }: { open: boolean, handleClose: () => void }) {
  const theme = useTheme()
  const cart = useCart(state => state.cart)
  const add = useCart(state => state.add)
  const remove = useCart(state => state.remove)
  return (
    <Drawer variant='temporary' open={open} onClose={handleClose} anchor='right' PaperProps={{ sx: { backgroundColor: theme.palette.primary.main, color: '#fff', paddingTop: { md: 8 }, paddingX: 4 } }}>
      <IconButton onClick={handleClose}>
        <Cancel />
      </IconButton>
      <Stack flexDirection='column' gap={2}>
        {cart.length < 1 && <Typography>No hay productos aún en el carrito.</Typography>}
        {cart.map(({ item, quantity }, idx) => (
          <Card key={item.denominacion}>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {item.denominacion}
              </Typography>
              <Stack direction='row' alignItems='center' justifyContent='space-around'>
                <Typography variant='h6' color='text.secondary'>
                  $ {item.precioVenta * quantity} x {quantity}
                </Typography>
                <Stack direction='row' alignItems='center' justifyContent='center' sx={{ padding: 0 }}>
                  <IconButton
                    onClick={() => {
                      remove(idx)
                    }}
                    disabled={quantity === 1}
                  >
                    <Remove />
                  </IconButton>
                  <Typography color='GrayText'>
                    {quantity ?? 1}
                  </Typography>
                  <IconButton onClick={() => {
                    add(idx)
                  }}
                  >
                    <Add />
                  </IconButton>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
        <Card>
          <CardContent>
            <Stack flexDirection='row' gap={2}>
              <Typography gutterBottom variant='h5' component='div'>
                TOTAL:
              </Typography>
              <Typography variant='h6' color='text.secondary'>
                $ {cart.reduce((acc, current) => {
                return acc + current.item.precioVenta * current.quantity
              }, 0)}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Drawer>
  )
}
