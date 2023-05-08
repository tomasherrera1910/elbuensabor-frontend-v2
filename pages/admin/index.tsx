import AdminMenu from '@/components/Admin'
import CustomHead from '@/components/CustomHead'
import Layout from '@/components/Layout'
import { useUserAllInfo } from '@/store/userAllInfo'

export default function Admin () {
  const user = useUserAllInfo(state => state.user)
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
