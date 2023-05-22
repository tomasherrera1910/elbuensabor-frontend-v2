import { ItemManufactured } from '@/utils/types'
import { Delete, Edit } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

export default function DishCard ({ dish }: { dish: ItemManufactured }) {
  return (
    <Card key={dish.id}>
      <CardMedia
        component='img'
        image={dish.imagen.url}
        alt='Dish image'
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>
          {dish.denominacion}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {dish.rubro} • ${dish.precioVenta}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' variant='outlined' startIcon={<Edit />}>Editar</Button>
        <Button size='small' color='error' variant='outlined' startIcon={<Delete />}>Eliminar</Button>
      </CardActions>
    </Card>
  )
}
