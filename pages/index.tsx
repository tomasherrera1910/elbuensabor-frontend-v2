import Login from '@/components/Login'
import HomeComponent from '@/components/Home'
import CustomHead from '@/components/CustomHead'
import Navbar from '@/components/Navbar'
import useUser from '@/hooks/useUser'
import LoadingPage from '@/components/LoadingPage'

export default function Home () {
  const { user, loading } = useUser()
  return (
    <>
      <CustomHead section={`${loading ? 'Cargando' : user ? 'Home' : 'Login'}`} />
      {user && <Navbar />}
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {loading && <LoadingPage />}
        {user && !loading && <HomeComponent />}
        {!user && !loading && <Login />}
      </main>
    </>
  )
}
