import useRoleManager from '@/hooks/useRoleManager'
import { Button, Container, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import SkeletonUserList from './SkeletonUserList'
import Link from 'next/link'
import { ArrowBack } from '@mui/icons-material'
import UserItem from './UserItem'
import UpdateUserSnackbar from './UpdateUserSnackbar'

export default function RoleManager () {
  const { users, loading, handleSearch, handleChangeRol, handleSnackbarClose, snackbarInfo } = useRoleManager()
  return (
    <Container maxWidth='sm'>
      <Typography variant='h5' component='h1' fontWeight='900' textAlign='center' marginBottom={4}>
        ROLES DE USUARIO
      </Typography>
      <TextField label='Buscar' placeholder='Busca por email...' fullWidth onChange={handleSearch} />
      <List>
        <ListItem>
          <ListItemText>
            <Typography fontWeight={700}>EMAIL</Typography>
          </ListItemText>
          <ListItemText sx={{ textAlign: 'end', paddingRight: 4 }}>
            <Typography fontWeight={700}>ROL</Typography>
          </ListItemText>
        </ListItem>
        <SkeletonUserList loading={loading} />
        {
          users.slice(0, 20).map(user => (
            <UserItem user={user} key={user.id} handleChangeRol={handleChangeRol} />
          ))
        }
        <UpdateUserSnackbar message={snackbarInfo.message} open={snackbarInfo.open} severity={snackbarInfo.severity} handleClose={handleSnackbarClose} />
      </List>
      <Link href='/admin'>
        <Button startIcon={<ArrowBack />}>
          Volver
        </Button>
      </Link>
    </Container>
  )
}
