import { type ItemManufactured } from '@/utils/types'
import { ShoppingCart } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'

interface Props {
  items: ItemManufactured[]
}
export default function Menus ({ items }: Props) {
  const theme = useTheme()
  const xlScreen = useMediaQuery(theme.breakpoints.up('xl'))
  return (
    <>
      <Container maxWidth={xlScreen ? 'lg' : 'md'}>
        <Stack flexDirection='row' gap={2}>
          {items.map(dish => (
            <Card sx={{ maxWidth: 345 }} key={dish.id}>
              <CardMedia
                sx={{ height: 140 }}
                image={dish.imagen.url}
                title={`${dish.denominacion} imagen`}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {dish.denominacion}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {dish.rubro}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' endIcon={<ShoppingCart />}>Agregar a Carrito</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  )
}
