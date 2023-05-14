import { ItemSupply } from '@/utils/types'
import { Delete, Edit } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'

export default function SupplyCard ({ supply }: { supply: ItemSupply }) {
  return (
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
        <Button size='small' variant='outlined' startIcon={<Edit />}>Editar</Button>
        <Button size='small' color='error' variant='outlined' startIcon={<Delete />}>Eliminar</Button>
      </CardActions>
    </Card>
  )
}
