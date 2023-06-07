import { ItemManufactured, ItemSupply } from '@/utils/types'
import { Delete, Edit } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Ingredients from './Ingredients'
import { useUserSession } from '@/store/user'
import { deleteInfo } from '@/utils/CRUDActions'

interface Props {
  dish: ItemManufactured
  supplies: ItemSupply[]
  removeSupply: (id: string) => void
}
export default function DishCard ({ dish, supplies, removeSupply }: Props) {
  const userInfo = useUserSession(state => state.userInfo)
  const handleDelete = (id: string) => {
    deleteInfo(`articulosManufacturados/${id}`, userInfo?.token)
      .then((_response) => {
        console.log('entro')
        removeSupply(id)
      })
      .catch((error) => {
        console.error('Error: ', error)
      })
  }
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
        <Button size='small' color='error' variant='outlined' startIcon={<Delete />} onClick={() => { handleDelete(dish.id) }}>Eliminar</Button>
      </CardActions>
    </Card>
  )
}
