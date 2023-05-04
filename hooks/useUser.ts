import { useUserSession } from '@/store/user'
import { useUserSensivityInfo } from '@/store/userSensitivityInfo'
import { useEffect, useState } from 'react'

const useUser = () => {
  const userSession = useUserSession(state => state.userInfo)
  const getProfile = useUserSensivityInfo(state => state.getProfile)
  const user = useUserSensivityInfo(state => state.user)
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
    }
  }, [userSession])
  return { user, loading }
}

export default useUser
