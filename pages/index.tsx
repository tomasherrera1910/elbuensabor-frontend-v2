import Login from '@/components/Login'
import HomeComponent from '@/components/Home'
import CustomHead from '@/components/CustomHead'
import Navbar from '@/components/Navbar'
import useUser from '@/hooks/useUser'
import LoadingPage from '@/components/LoadingPage'
import { Stack } from '@mui/material'

export default function Home () {
  const { user, loading, userSession } = useUser()
  return (
    <>
      <CustomHead section={`${loading ? 'Cargando' : user ? 'Home' : 'Login'}`} />
      <Stack flexDirection='row'>
        {userSession && !loading && <Navbar />}
        <main style={{ minHeight: '100vh', flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {loading && <LoadingPage />}
          {user && userSession && !loading && <HomeComponent />}
          {!userSession && !loading && <Login />}
        </main>
      </Stack>
    </>
  )
}
