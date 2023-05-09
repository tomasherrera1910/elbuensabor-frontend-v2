import AdminMenu from '@/components/Admin'
import CustomHead from '@/components/CustomHead'
import Layout from '@/components/Layout'
import useUser from '@/hooks/useUser'
import Custom404 from '../404'

export default function Admin () {
  const { user } = useUser()

  return (
    <>
      <CustomHead section={user?.rol === 'admin' ? 'ADMIN' : '404'} />
      {user?.rol === 'admin'
        ? (
          <Layout disableLoader>
            <AdminMenu />
          </Layout>
          )
        : (
          <Custom404 />
          )}

    </>
  )
}
