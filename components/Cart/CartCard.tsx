import { Item, useCart } from '@/store/cart'
import { Add, Remove } from '@mui/icons-material'
import { Card, CardContent, IconButton, Stack, Typography } from '@mui/material'
interface Props {
  quantity: number
  item: Item
  idx: number
}
export default function CartCard ({ item, quantity, idx }: Props) {
  const add = useCart(state => state.add)
  const remove = useCart(state => state.remove)
  return (
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
  )
}
