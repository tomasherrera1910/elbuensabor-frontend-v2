import { ItemSupply, type Ingredient } from '@/utils/types'
import { Typography } from '@mui/material'
import IngredientForm from './IngredientForm'
import IngredientCard from './IngredientCard'

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
        <IngredientCard key={i.id} ingredient={i} />
      ))}
      <IngredientForm supplies={supplies} dishId={dishId} />
    </>
  )
}
