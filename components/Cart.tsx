import { Cancel } from '@mui/icons-material'
import { Drawer, IconButton, useTheme } from '@mui/material'

export default function Cart ({ open, handleClose }: { open: boolean, handleClose: () => void }) {
  const theme = useTheme()
  return (
    <Drawer variant='temporary' open={open} onClose={handleClose} anchor='right' PaperProps={{ sx: { backgroundColor: theme.palette.primary.main, color: '#fff', paddingTop: { md: 8 } } }}>
      <IconButton onClick={handleClose}>
        <Cancel />
      </IconButton>
      PROBANDO PROBANDO
    </Drawer>
  )
}
