import Login from '@/components/Login'
import CustomHead from '@/components/CustomHead'

export default function Home () {
  const user = null
  return (
    <>
      <CustomHead section={`${user != null ? 'Home' : 'Login'}`} />
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Login />
      </main>
    </>
  )
}
