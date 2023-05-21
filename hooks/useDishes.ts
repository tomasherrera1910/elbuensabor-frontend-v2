import { type ItemManufactured } from '@/utils/types'
import { useState } from 'react'

const useDishes = ({ initialItems }: { initialItems: ItemManufactured[] }) => {
  const [dishes, setDishes] = useState(initialItems)

  const addNewSupply = (newDish: ItemManufactured) => {
    setDishes([...dishes, newDish])
  }

  const updateSupply = (dish: ItemManufactured) => {
    setDishes(prevDishes => {
      const dishesCopy: ItemManufactured[] = window.structuredClone(prevDishes)
      const idxToUpdate = dishesCopy.findIndex(d => d.id === dish.id)
      dishesCopy[idxToUpdate] = dish
      return dishesCopy
    })
  }

  const removeSupply = (id: string) => {
    setDishes(prevDishes => {
      return prevDishes.filter(d => d.id !== id)
    })
  }
  return { dishes, addNewSupply, updateSupply, removeSupply }
}

export default useDishes
