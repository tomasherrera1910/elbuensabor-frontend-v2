import AdminMenu from '@/components/Admin'
import CustomHead from '@/components/CustomHead'
import Layout from '@/components/Layout'
import useUser from '@/hooks/useUser'

export default function Admin () {
  const { user } = useUser()

  return (
    <>
      <CustomHead section='ADMIN' />
      {user?.rol === 'admin'
        ? (
          <Layout disableLoader>
            <AdminMenu />
          </Layout>
          )
        : (
          // Aca iria el 404
          <>404</>
          )}

    </>
  )
}
