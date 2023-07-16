import CustomHead from '@/components/CustomHead'
import useUser from '@/hooks/useUser'
import Layout from '@/components/Layout'
import Addresses from '@/components/Addresses'

export default function Direcciones () {
  const { user, loading } = useUser()
  const headTitle = loading ? 'Cargando' : user ? 'Direcciones' : 'Login'
  return (
    <>
      <CustomHead section={`${headTitle}`} />
      <Layout>
        <Addresses />
      </Layout>
    </>
  )
}
