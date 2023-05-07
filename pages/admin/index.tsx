import AdminMenu from '@/components/Admin'
import CustomHead from '@/components/CustomHead'
import Layout from '@/components/Layout'

export default function Admin () {
  return (
    <>
      <CustomHead section='ADMIN' />
      <Layout disableLoader>
        <AdminMenu />
      </Layout>
    </>
  )
}
