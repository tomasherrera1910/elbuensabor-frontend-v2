import CustomHead from '@/components/CustomHead'
import RegisterComponent from '@/components/Register'
export default function Register () {
  return (
    <>
      <CustomHead section='Registro' />
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <RegisterComponent />
      </main>
    </>
  )
}
