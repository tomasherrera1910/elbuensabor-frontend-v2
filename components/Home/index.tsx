import { useUserSession } from '@/store/user'
import { Button, Container } from '@mui/material'
import Sidebar from '../Sidebar'

export default function Home () {
  const logout = useUserSession(state => state.logout)
  const userInfo = useUserSession(state => state.userInfo)
  console.log(userInfo)
  return (
    <>
      <Sidebar />
      <Container>
        HOME
        <Button onClick={logout}>
          Cerrar Sesión
        </Button>
        <Button onClick={logout}>
          Admin
        </Button>
      </Container>
    </>
  )
}
