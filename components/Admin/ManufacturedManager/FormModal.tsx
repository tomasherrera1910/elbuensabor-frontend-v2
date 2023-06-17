import { Box, Dialog, IconButton, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import { type ItemManufactured } from '@/utils/types'
import ItemManufacturedForm from './ItemManufacturedForm'

interface Props {
  open: boolean
  handleClose: () => void
  handleDish: (dish: ItemManufactured) => void
  edit?: boolean
  actualDish?: ItemManufactured
}
export default function DishFormModal ({ open, handleClose, edit, actualDish, handleDish }: Props) {
  return (
    <Dialog open={open} onClose={handleClose} scroll='paper'>
      <IconButton sx={{ position: 'absolute', right: 0 }} size='large' onClick={handleClose}>
        <Close />
      </IconButton>
      <Box padding={4}>
        <Typography fontWeight={500} textAlign='center' marginBottom={2}>{actualDish ? actualDish.denominacion : 'PLATO'}</Typography>
        <ItemManufacturedForm handleDishes={handleDish} actualDish={actualDish} edit={edit} />
      </Box>
    </Dialog>
  )
}
