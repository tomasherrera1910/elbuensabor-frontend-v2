import { Alert, Snackbar } from '@mui/material'
interface Props {
  message?: string
  severity?: 'success' | 'error'
  open?: boolean
  handleClose: () => void
}
export default function UpdateUserSnackbar ({ message, severity, open = false, handleClose }: Props) {
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={3000}
    >
      <Alert onClose={handleClose} severity={severity ?? 'error'} variant='filled' sx={{ width: '100%' }}>
        {message ?? ''}
      </Alert>
    </Snackbar>
  )
}
