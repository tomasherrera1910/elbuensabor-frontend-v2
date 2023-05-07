import AdminMenu from '@/components/Admin'
import CustomHead from '@/components/CustomHead'
import useUser from '@/hooks/useUser'
import Layout from '@/components/Layout'

export default function Home () {
  const { user, loading } = useUser()
  return (
    <>
      <CustomHead section={`${loading ? 'Cargando' : user ? 'ADMIN' : 'Login'}`} />
      <Layout>
        <AdminMenu />
      </Layout>
    </>
  )
}
