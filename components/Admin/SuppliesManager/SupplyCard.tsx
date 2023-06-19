import { ItemSupply } from '@/utils/types'
import { Delete, Edit } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import FormModal from './FormModal'
import useToggle from '@/hooks/useToggle'
import { deleteInfo } from '@/utils/CRUDActions'
import { useUserSession } from '@/store/user'
import { useState } from 'react'
interface Props {
  supply: ItemSupply
  updateSupply: (supply: ItemSupply) => void
  removeSupply: (id: string) => void
}
export default function SupplyCard ({ supply, updateSupply, removeSupply }: Props) {
  const [showModalForm, handleModalForm] = useToggle()
  const userInfo = useUserSession(state => state.userInfo)
  const [loading, isLoading] = useState(false)
  const handleDelete = (id: string) => {
    isLoading(true)
    deleteInfo(`articulosInsumo/${id}`, userInfo?.token)
      .then((_response) => {
        // console.log('entro')
        removeSupply(id)
      })
      .catch((error) => {
        console.error('Error: ', error)
      })
      .finally(() => {
        // console.log('entro')
        isLoading(false)
      })
  }
  return (
    <>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {supply.rubro}
          </Typography>
          <Typography variant='h5' component='div'>
            {supply.denominacion}
          </Typography>
          <Typography color='text.secondary'>
            {supply.stockActual} {supply.unidadMedida}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleModalForm} size='small' variant='outlined' startIcon={<Edit />}>Editar</Button>
          <Button size='small' color='error' variant='outlined' startIcon={<Delete />} disabled={loading} onClick={() => { handleDelete(supply.id) }}>{loading ? 'Cargando...' : 'Eliminar'}</Button>
        </CardActions>
      </Card>
      <FormModal edit actualItem={supply} handleClose={handleModalForm} open={showModalForm} handleSupplies={updateSupply} />
    </>
  )
}
