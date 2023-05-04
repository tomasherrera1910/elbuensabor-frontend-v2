import { useUserSession } from '@/store/user'
import { useUserAllInfo } from '@/store/userAllInfo'
import { useEffect, useState } from 'react'

const useUser = () => {
  const userSession = useUserSession(state => state.userInfo)
  const getProfile = useUserAllInfo(state => state.getProfile)
  const user = useUserAllInfo(state => state.user)
  const [loading, isLoading] = useState(true)
  useEffect(() => {
    if (userSession) {
      getProfile(userSession.token)
        .catch(() => {
          console.error('Internal Error')
        })
        .finally(() => {
          isLoading(false)
        })
    } else {
      isLoading(false)
    }
  }, [userSession])
  return { user, userSession, loading }
}

export default useUser
