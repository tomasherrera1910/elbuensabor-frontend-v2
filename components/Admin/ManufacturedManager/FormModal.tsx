import { Box, Dialog, IconButton, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import { type ItemSupply } from '@/utils/types'

interface Props {
  open: boolean
  handleClose: () => void
  //   handleSupplies: (supply: ItemSupply) => void
  edit?: boolean
  actualItem?: ItemSupply
}
export default function DishFormModal ({ open, handleClose, edit, actualItem }: Props) {
  return (
    <Dialog open={open} onClose={handleClose} scroll='paper'>
      <IconButton sx={{ position: 'absolute', right: 0 }} size='large' onClick={handleClose}>
        <Close />
      </IconButton>
      <Box padding={4}>
        <Typography fontWeight={500} textAlign='center' marginBottom={2}>PLATO</Typography>
      </Box>
    </Dialog>
  )
}
