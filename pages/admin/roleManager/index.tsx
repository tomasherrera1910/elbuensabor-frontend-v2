import RoleManagerComponent from '@/components/Admin/RoleManager'
import CustomHead from '@/components/CustomHead'
import Layout from '@/components/Layout'
import useUser from '@/hooks/useUser'
import Custom404 from '@/pages/404'

export default function RoleManager () {
  const { user } = useUser()

  return (
    <>
      <CustomHead section={user?.rol === 'admin' ? 'ADMIN' : '404'} />
      {user?.rol === 'admin'
        ? (
          <Layout disableLoader>
            <RoleManagerComponent />
          </Layout>
          )
        : (
          <Custom404 />
          )}

    </>
  )
}
