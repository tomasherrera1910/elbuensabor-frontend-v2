import { Ingredient } from '@/utils/types'
import { useState } from 'react'

const useIngredients = ({ initialIngredients }: { initialIngredients: Ingredient[] }) => {
  const [ingredients, setIngredients] = useState(initialIngredients)
  const addIngredient = (newIngredient: Ingredient) => {
    setIngredients(prevIngredients => {
      return [...prevIngredients, newIngredient]
    })
  }
  const removeIngredient = (id: string) => {
    setIngredients(prevIngredients => {
      return prevIngredients.filter(i => i.id !== id)
    })
  }
  return { ingredients, addIngredient, removeIngredient }
}

export default useIngredients
