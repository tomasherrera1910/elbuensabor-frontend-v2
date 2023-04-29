import Login from '@/components/Login'
import CustomHead from '@/components/CustomHead'

export default function Home () {
  const user = null
  return (
    <>
      <CustomHead section={`${user != null ? 'Home' : 'Login'}`} />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Login />
      </div>
    </>
  )
}
