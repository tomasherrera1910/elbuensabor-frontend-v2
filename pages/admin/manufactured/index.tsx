import ManufacturedManager from '@/components/Admin/ManufacturedManager'
import CustomHead from '@/components/CustomHead'
import Layout from '@/components/Layout'
import useUser from '@/hooks/useUser'
import Custom404 from '@/pages/404'
import { getInfo } from '@/utils/CRUDActions'
import { ItemSupply, type ItemManufactured } from '@/utils/types'
import { GetServerSideProps } from 'next'

interface Props {
  manufacturedItems: ItemManufactured[]
  suppliesItems: ItemSupply[]
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const manufacturedItems: ItemManufactured[] = await getInfo('articulosManufacturados')
  const suppliesItems: ItemSupply[] = await getInfo('articulosInsumo')
  const ingredients = suppliesItems.filter(s => !s.esInsumo)
  return {
    props: {
      manufacturedItems,
      suppliesItems: ingredients
    }
  }
}
export default function Manufactured ({ manufacturedItems, suppliesItems }: Props) {
  const { user } = useUser()

  return (
    <>
      <CustomHead section={user?.rol === 'admin' ? 'ADMIN' : '404'} />
      {user?.rol === 'admin'
        ? (
          <Layout disableLoader>
            <ManufacturedManager initialItems={manufacturedItems} supplies={suppliesItems} />
          </Layout>
          )
        : (
          <Custom404 />
          )}

    </>
  )
}
