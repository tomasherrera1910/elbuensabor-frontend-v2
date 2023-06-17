import { getInfo } from '@/utils/CRUDActions'
import { type ItemManufactured } from '@/utils/types'
import { useState } from 'react'

const useDishes = ({ initialItems }: { initialItems: ItemManufactured[] }) => {
  const [dishes, setDishes] = useState(initialItems)

  const addNewDish = (_info: ItemManufactured) => {
    getInfo('articulosManufacturados')
      .then(response => {
        setDishes(response as ItemManufactured[])
      })
      .catch(() => {
        console.error('Ha ocurrido un error')
      })
  }

  const updateDish = (dish: ItemManufactured) => {
    setDishes(prevDishes => {
      const dishesCopy: ItemManufactured[] = window.structuredClone(prevDishes)
      const idxToUpdate = dishesCopy.findIndex(d => d.id === dish.id)
      dishesCopy[idxToUpdate] = dish
      return dishesCopy
    })
  }

  const removeDish = (id: string) => {
    setDishes(prevDishes => {
      return prevDishes.filter(d => d.id !== id)
    })
  }
  return { dishes, addNewDish, updateDish, removeDish }
}

export default useDishes
