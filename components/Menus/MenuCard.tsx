import { CartItem, useCart } from '@/store/cart'
import { ItemManufactured } from '@/utils/types'
import { Add, ExpandMore, Remove, ShoppingCart } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActions, CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import { useState } from 'react'

export default function MenuCard ({ dish, cart }: { dish: ItemManufactured, cart: CartItem[] }) {
  const [expanded, setExpanded] = useState<string | false>(false)
  const isInCart = cart.some(cartItem => cartItem.item.denominacion === dish.denominacion)
  const indexInCart = isInCart ? cart.findIndex(cartItem => cartItem.item.denominacion === dish.denominacion) : -1
  const itemInCart = isInCart ? { info: cart[indexInCart], index: indexInCart } : undefined
  // const [itemInCart, setItemInCart] = useState(() => {
  //   return isInCart ? { info: cart[indexInCart], index: indexInCart } : undefined
  // })
  const addToCart = useCart(state => state.addToCart)
  const deleteToCart = useCart(state => state.deleteToCart)
  const removeItem = useCart(state => state.remove)
  const addItem = useCart(state => state.add)
  const handleCart = () => {
    if (isInCart) {
      deleteToCart(dish.denominacion)
      // setItemInCart(isInCart ? { info: cart[indexInCart], index: indexInCart } : undefined)
    } else {
      addToCart(dish)
      // setItemInCart(isInCart ? { info: cart[indexInCart], index: indexInCart } : undefined)
    }
  }
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }
  return (
    <Card sx={{ width: 300, boxShadow: expanded ? 'auto' : 'none' }} variant='outlined'>
      <CardMedia
        sx={{ height: 140 }}
        image={dish.imagen.url}
        title={`${dish.denominacion} imagen`}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {dish.denominacion}
        </Typography>
        <Typography variant='h6' color='text.secondary'>
          $ {dish.precioVenta}
        </Typography>
      </CardContent>
      <CardActions sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', height: 48 }}>
        <Button onClick={handleCart} size='small' sx={{ fontSize: 12 }} variant='outlined' color={isInCart ? 'error' : 'primary'} endIcon={<ShoppingCart fontSize='small' />}>
          {isInCart ? 'Quitar del carrito' : 'Añadir a carrito'}
        </Button>
        {isInCart &&
          <Stack direction='row' alignItems='center' justifyContent='center' sx={{ padding: 0 }}>
            <IconButton
              onClick={() => {
                removeItem(itemInCart?.index ?? 0)
                // setItemInCart(isInCart ? { info: cart[indexInCart], index: indexInCart } : undefined)
              }}
              disabled={itemInCart?.info.quantity === 1}
            >
              <Remove />
            </IconButton>
            <Typography color='GrayText'>
              {itemInCart?.info?.quantity ?? 1}
            </Typography>
            <IconButton onClick={() => {
              addItem(itemInCart?.index ?? 0)
              // setItemInCart(isInCart ? { info: cart[indexInCart], index: indexInCart } : undefined)
            }}
            >
              <Add />
            </IconButton>
          </Stack>}
      </CardActions>
      {dish.ingredientes.length > 0 && (
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ boxShadow: expanded ? 'auto' : 'none', minHeight: 'auto', margin: 0 }}>
          <AccordionSummary
            sx={{ height: 'fit-content' }}
            expandIcon={<ExpandMore />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Ingredientes
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingY: 0 }}>
            {dish.ingredientes?.map(i => (
              <Typography variant='body1' color='text.secondary' sx={{ padding: 0, paddingBottom: 1 }} key={i.id}>{i.nombre}</Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      )}
    </Card>
  )
}
