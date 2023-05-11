import { useUserSession } from '@/store/user'
import { editInfo, getInfo } from '@/utils/CRUDActions'
import { User } from '@/utils/types'
import { useEffect, useMemo, useState } from 'react'

interface SnackbarProps {
  message: string
  severity: 'error' | 'success'
  open: boolean
}
const useRoleManager = () => {
  const user = useUserSession(state => state.userInfo)
  const [users, setUsers] = useState<Array<Partial<User>>>([])
  const [searchInput, setSearchInput] = useState('')
  const [loading, isLoading] = useState(false)
  const [snackbarInfo, setSnackbarInfo] = useState<SnackbarProps>({ message: '', severity: 'error', open: false })
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
  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(evt.target.value)
  }
  const filteredUsers = useMemo(() => {
    if (searchInput) {
      return users.filter(user => user.email?.includes(searchInput.toLowerCase().trim()))
    } else return users
  }, [searchInput, users])

  const handleChangeRol = (value: string, userToUpdate: User) => {
    const newRole = { rol: value }
    editInfo(`users/${userToUpdate.id}`, user?.token, newRole)
      .then((user: User) => {
        setUsers(prevUsers => {
          const userUpdateIdx = prevUsers.findIndex(u => u.id === user.id)
          prevUsers[userUpdateIdx].rol = value
          return prevUsers
        })

        setSnackbarInfo({
          message: `El usuario ${user.email} ahora es ${user.rol}`,
          severity: 'success',
          open: true
        })
      })
      .catch((_err) => {
        setSnackbarInfo({
          message: `Hubo un error al actualizar el rol de ${userToUpdate.email}`,
          severity: 'error',
          open: true
        })
      })
  }
  const handleSnackbarClose = () => {
    setSnackbarInfo(prevState => {
      return {
        ...prevState, open: false
      }
    })
  }
  return { users: filteredUsers, loading, handleSearch, handleChangeRol, handleSnackbarClose, snackbarInfo }
}

export default useRoleManager
