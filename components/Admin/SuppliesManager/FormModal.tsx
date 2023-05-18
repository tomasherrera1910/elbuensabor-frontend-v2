import { Box, Dialog, IconButton, Typography } from '@mui/material'
import ItemSupplyForm from './ItemSupplyForm'
import { Close } from '@mui/icons-material'
import { type ItemSupply } from '@/utils/types'

interface Props {
  open: boolean
  handleClose: () => void
  handleSupplies: (supply: ItemSupply) => void
  edit?: boolean
  actualItem?: ItemSupply
}
export default function FormModal ({ open, handleClose, handleSupplies, edit, actualItem }: Props) {
  return (
    <Dialog open={open} onClose={handleClose} scroll='paper'>
      <IconButton sx={{ position: 'absolute', right: 0 }} size='large' onClick={handleClose}>
        <Close />
      </IconButton>
      <Box padding={4}>
        <Typography fontWeight={500} textAlign='center' marginBottom={2}>ARTÍCULO INSUMO</Typography>
        <ItemSupplyForm handleSupplies={handleSupplies} edit={edit} actualItem={actualItem} />
      </Box>
    </Dialog>
  )
}
