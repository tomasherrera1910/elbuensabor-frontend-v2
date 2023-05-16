import { Box, Dialog, IconButton, Typography } from '@mui/material'
import ItemSupplyForm from './ItemSupplyForm'
import { Close } from '@mui/icons-material'
import { type ItemSupply } from '@/utils/types'

interface Props {
  open: boolean
  handleClose: () => void
  addNewSupply: (newSupply: ItemSupply) => void
  edit?: boolean
}
export default function FormModal ({ open, handleClose, addNewSupply, edit }: Props) {
  return (
    <Dialog open={open} onClose={handleClose} scroll='paper'>
      <IconButton sx={{ position: 'absolute', right: 0 }} size='large' onClick={handleClose}>
        <Close />
      </IconButton>
      <Box padding={4}>
        <Typography fontWeight={500} textAlign='center' marginBottom={2}>ARTÍCULO INSUMO</Typography>
        <ItemSupplyForm addNewSupply={addNewSupply} edit={edit} />
      </Box>
    </Dialog>
  )
}
