import { CartItem, useCart } from '@/store/cart'
import { ItemManufactured } from '@/utils/types'
import { ExpandMore, ShoppingCart } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useState } from 'react'

export default function MenuCard ({ dish, cart }: { dish: ItemManufactured, cart: CartItem[] }) {
  const [expanded, setExpanded] = useState<string | false>(false)
  const isInCart = cart.some(cartItem => cartItem.item.denominacion === dish.denominacion)
  const addToCart = useCart(state => state.addToCart)
  const deleteToCart = useCart(state => state.deleteToCart)
  const handleCart = () => {
    if (isInCart) {
      deleteToCart(dish.denominacion)
    } else {
      addToCart(dish)
    }
  }
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }
  console.log({ cart })
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
      <CardActions>
        <Button onClick={handleCart} size='small' sx={{ fontSize: 12 }} variant='outlined' color={isInCart ? 'error' : 'primary'} endIcon={<ShoppingCart fontSize='small' />}>
          {isInCart ? 'Quitar del carrito' : 'Añadir a carrito'}
        </Button>
      </CardActions>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ boxShadow: expanded ? 'auto' : 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Ingredientes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {dish.ingredientes?.map(i => (
            <Typography variant='body1' color='text.secondary' key={i.id}>{i.nombre}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </Card>
  )
}
