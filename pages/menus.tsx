import CustomHead from '@/components/CustomHead'
import Layout from '@/components/Layout'
import { getInfo } from '@/utils/CRUDActions'
import { ItemManufactured } from '@/utils/types'
import { GetServerSideProps } from 'next'
import Menus from '@/components/Menus'
interface Props {
  manufacturedItems: ItemManufactured[]
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const manufacturedItems: ItemManufactured[] = await getInfo('articulosManufacturados')
  return {
    props: {
      manufacturedItems
    }
  }
}
export default function MenusPage ({ manufacturedItems }: Props) {
  return (
    <>
      <CustomHead section='MENÚS' />

      <Layout disableLoader>
        <Menus items={manufacturedItems} />
      </Layout>
    </>
  )
}
