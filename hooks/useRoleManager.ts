import { useUserSession } from '@/store/user'
import { getInfo } from '@/utils/CRUDActions'
import { User } from '@/utils/types'
import { useEffect, useState } from 'react'

const useRoleManager = () => {
  const user = useUserSession(state => state.userInfo)
  const [users, setUsers] = useState<Array<Partial<User>>>([])
  const [loading, isLoading] = useState(false)

  useEffect(() => {
    isLoading(true)
    getInfo('users', user?.token)
      .then(setUsers)
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        isLoading(false)
      })
  }, [])
  return { users, loading }
}

export default useRoleManager
