import { useUserSession } from '@/store/user'
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
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
    >
      <DialogTitle id='responsive-dialog-title'>
        ¿Desea cerrar sesión?
      </DialogTitle>
      <DialogActions>
        <Button autoFocus onClick={handleShowModal}>
          NO
        </Button>
        <Button onClick={handleLogout} autoFocus>
          SI
        </Button>
      </DialogActions>
    </Dialog>
  )
}
