import CustomHead from '@/components/CustomHead'
import Layout from '@/components/Layout'
import NotFound from '@/components/NotFound'
import useUser from '@/hooks/useUser'

export default function Custom404 () {
  const { user } = useUser()
  return (
    <>
      <CustomHead section='404' />
      {user
        ? (
          <Layout>
            <NotFound />
          </Layout>
          )
        : (
          <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <NotFound />
          </main>
          )}
    </>
  )
}
