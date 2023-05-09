import { useUserSession } from '@/store/user'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useRouter } from 'next/router'

export default function ConfirmLogout ({ showModal, handleShowModal }: { showModal: boolean, handleShowModal: () => void }) {
  const logout = useUserSession(state => state.logout)
  const router = useRouter()
  const handleLogout = async () => {
    logout()
    await router.replace('/')
  }
  return (
    <Dialog
      open={showModal}
      onClose={handleShowModal}
      aria-labelledby='responsive-dialog-title'
      sx={{ padding: 4 }}
    >
      <DialogTitle id='responsive-dialog-title' textAlign='center'>
        CERRAR SESIÓN
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          ¿Seguro que desea cerrar sesión?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleShowModal} variant='outlined'>
          NO
        </Button>
        <Button onClick={handleLogout} autoFocus variant='contained'>
          SI
        </Button>
      </DialogActions>
    </Dialog>
  )
}
