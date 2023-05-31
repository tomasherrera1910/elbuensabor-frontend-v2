import { ItemSupply, type Ingredient } from '@/utils/types'
import { Typography } from '@mui/material'
import IngredientForm from './IngredientForm'

interface Props {
  ingredients: Ingredient[]
  dishId: string
  supplies: ItemSupply[]
}
export default function Ingredients ({ ingredients, dishId, supplies }: Props) {
  return (
    <>
      <Typography variant='body1' color='text.secondary'>
        Ingredientes
      </Typography>
      {ingredients.length > 0 && ingredients.map(i => (
        <Typography variant='body2' key={i.id}>{i.nombre} <span style={{ fontSize: 12 }}>({i.cantidad} {i.unidadMedida})</span></Typography>
      ))}
      <IngredientForm supplies={supplies} dishId={dishId} />
    </>
  )
}
