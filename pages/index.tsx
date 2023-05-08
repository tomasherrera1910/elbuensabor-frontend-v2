import HomeComponent from '@/components/Home'
import CustomHead from '@/components/CustomHead'
import useUser from '@/hooks/useUser'
import Layout from '@/components/Layout'

export default function Home () {
  const { user, loading } = useUser()
  const headTitle = loading ? 'Cargando' : user ? 'Home' : 'Login'
  return (
    <>
      <CustomHead section={`${headTitle}`} />
      <Layout>
        <HomeComponent />
      </Layout>
    </>
  )
}
