import { ItemSupply } from '@/utils/types'
import { Delete, Edit } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import FormModal from './FormModal'
import useToggle from '@/hooks/useToggle'

export default function SupplyCard ({ supply, updateSupply }: { supply: ItemSupply, updateSupply: (supply: ItemSupply) => void }) {
  const [showModalForm, handleModalForm] = useToggle()
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
          <Button size='small' color='error' variant='outlined' startIcon={<Delete />}>Eliminar</Button>
        </CardActions>
      </Card>
      <FormModal edit actualItem={supply} handleClose={handleModalForm} open={showModalForm} handleSupplies={updateSupply} />
    </>
  )
}
