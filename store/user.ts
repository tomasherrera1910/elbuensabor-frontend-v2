import { postInfo } from '@/utils/CRUDActions'
import { type UserSession } from '@/utils/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  userInfo?: UserSession
  loginUser: (body: { email: string, clave: string }) => Promise<void>
  logout: () => void
}
export const useUserSession = create<State>()(persist((set) => {
  return {
    userInfo: undefined,
    loginUser: async (body: { email: string, clave: string }) => {
      const user: UserSession = await postInfo('login', undefined, body)
      set({ userInfo: user })
    },
    logout: () => {
      set({ userInfo: undefined })
    }
  }
}, {
  name: 'userSession'
}))
