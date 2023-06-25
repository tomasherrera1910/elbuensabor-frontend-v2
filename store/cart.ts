import { ItemManufactured } from '@/utils/types'
import { create } from 'zustand'

interface State {
  cart: ItemManufactured[]
  addToCart: (item: ItemManufactured) => void
}
export const useUserAllInfo = create<State>((set, get) => {
  return {
    cart: [],
    addToCart: (item: ItemManufactured) => {
      const actualCart = get().cart
      set({ cart: [...actualCart, item] })
    }
  }
})
