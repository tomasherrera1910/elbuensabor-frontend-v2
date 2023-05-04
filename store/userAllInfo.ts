import { getInfo } from '@/utils/CRUDActions'
import { User } from '@/utils/types'
import { create } from 'zustand'

interface State {
  user?: User
  getProfile: (token: string) => Promise<void>
}
export const useUserAllInfo = create<State>((set) => {
  return {
    user: undefined,
    getProfile: async (token: string) => {
      const loggedUser = await getInfo('users/profile', token)
      set({ user: loggedUser })
    }
  }
})
