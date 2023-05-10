import useRoleManager from '@/hooks/useRoleManager'
import { Container, List, ListItem, ListItemText, MenuItem, Select, Typography } from '@mui/material'

export default function RoleManager () {
  const { users, loading } = useRoleManager()
  return (
    <Container maxWidth='sm'>
      <Typography variant='h5' component='h1' fontWeight='900' textAlign='center' marginBottom={4}>
        ROLES DE USUARIO
      </Typography>
      <List>
        {
          users.map(user => (
            <ListItem key={user.id}>
              <ListItemText>
                {user.email}
              </ListItemText>
              <Select
                value={user.rol}
                label='Rol'
              >
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='usuario'>Usuario</MenuItem>
                <MenuItem value='cocinero'>Cocinero</MenuItem>
                <MenuItem value='cajero'>Cajero</MenuItem>
              </Select>
            </ListItem>
          ))
        }
      </List>
    </Container>
  )
}
