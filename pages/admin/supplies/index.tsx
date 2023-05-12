import SuppliesManager from '@/components/Admin/SuppliesManager'
import CustomHead from '@/components/CustomHead'
import Layout from '@/components/Layout'
import useUser from '@/hooks/useUser'
import Custom404 from '@/pages/404'
import { getInfo } from '@/utils/CRUDActions'
import { ItemSupply } from '@/utils/types'
import { GetServerSideProps } from 'next'

interface Props {
  supplies: ItemSupply[]
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const supplies: ItemSupply[] = await getInfo('articulosManufacturados')
  return {
    props: {
      supplies
    }
  }
}
export default function Supplies ({ supplies }: Props) {
  const { user } = useUser()

  return (
    <>
      <CustomHead section={user?.rol === 'admin' ? 'ADMIN' : '404'} />
      {user?.rol === 'admin'
        ? (
          <Layout disableLoader>
            <SuppliesManager initialSupplies={supplies} />
          </Layout>
          )
        : (
          <Custom404 />
          )}

    </>
  )
}
