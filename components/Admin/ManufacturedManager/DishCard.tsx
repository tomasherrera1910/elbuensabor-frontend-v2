import { ItemManufactured } from '@/utils/types'
import { Card, CardMedia } from '@mui/material'

export default function DishCard ({ dish }: { dish: ItemManufactured }) {
  return (
    <Card key={dish.id}>
      <CardMedia
        component='img'
        sx={{ width: 151 }}
        image={dish.imagen.url}
        alt='Dish image'
      />
    </Card>
  )
}
