import { ItemManufactured, ItemSupply } from '@/utils/types'
import { create } from 'zustand'

interface CartItem {
  item: ItemManufactured | ItemSupply
  quantity: number
}
interface State {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  deleteToCart: (name: string) => void
}
export const useUserAllInfo = create<State>((set, get) => {
  return {
    cart: [],
    addToCart: (item: CartItem) => {
      const actualCart = get().cart
      set({ cart: [...actualCart, { ...item, quantity: 1 }] })
    },
    deleteToCart: (name: string) => {
      const actualCart = get().cart
      set({ cart: actualCart.filter(item => item.item.denominacion !== name) })
    }
  }
})
