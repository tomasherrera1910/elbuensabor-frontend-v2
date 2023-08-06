import CustomHead from '@/components/CustomHead'
import useUser from '@/hooks/useUser'
import Layout from '@/components/Layout'
import Addresses from '@/components/Addresses'
// import { Address } from '@/utils/types'
// import { GetServerSideProps } from 'next'
// import { getInfo } from '@/utils/CRUDActions'
// interface Props {
//   addresses: Address[]
// }
// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const addresses: Address[] = await getInfo('addresses')
//   return {
//     props: {
//       addresses
//     }
//   }
// }
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
