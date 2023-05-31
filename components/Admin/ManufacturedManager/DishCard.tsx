import { ItemManufactured, ItemSupply } from '@/utils/types'
import { Delete, Edit } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Ingredients from './Ingredients'

export default function DishCard ({ dish, supplies }: { dish: ItemManufactured, supplies: ItemSupply[] }) {
  return (
    <Card key={dish.id} sx={{ width: 300 }}>
      <CardMedia
        component='img'
        image={dish.imagen.url}
        alt='Dish image'
        sx={{ width: 300, height: 164, objectFit: 'cover' }}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>
          {dish.denominacion}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {dish.rubro} • ${dish.precioVenta}
        </Typography>
        <Ingredients ingredients={dish.ingredientes} dishId={dish.id} supplies={supplies} />
      </CardContent>
      <CardActions>
        <Button size='small' variant='outlined' startIcon={<Edit />}>Editar</Button>
        <Button size='small' color='error' variant='outlined' startIcon={<Delete />}>Eliminar</Button>
      </CardActions>
    </Card>
  )
}
