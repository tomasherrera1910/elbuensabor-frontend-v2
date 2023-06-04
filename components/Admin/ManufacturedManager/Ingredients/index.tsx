import { ItemSupply, type Ingredient } from '@/utils/types'
import { Typography } from '@mui/material'
import IngredientForm from './IngredientForm'
import IngredientCard from './IngredientCard'
import useIngredients from '@/hooks/useIngredients'

interface Props {
  ingredients: Ingredient[]
  dishId: string
  supplies: ItemSupply[]
}
export default function Ingredients ({ ingredients, dishId, supplies }: Props) {
  const { ingredients: dishIngredients, addIngredient, removeIngredient } = useIngredients({ initialIngredients: ingredients })
  return (
    <>
      <Typography variant='body1' color='text.secondary'>
        Ingredientes
      </Typography>
      {dishIngredients.length > 0 && dishIngredients.map(i => (
        <IngredientCard key={i.id} ingredient={i} removeIngredient={removeIngredient} />
      ))}
      <IngredientForm supplies={supplies} dishId={dishId} addIngredient={addIngredient} />
    </>
  )
}
