import { User } from '@/utils/types'
import { FormControl, InputLabel, ListItem, ListItemText, MenuItem, Select } from '@mui/material'

export default function UserItem ({ user, handleChangeRol }: { user: Partial<User>, handleChangeRol: (value: string, userToUpdate: User) => void }) {
  return (
    <ListItem key={user.id}>
      <ListItemText>
        {user.email}
      </ListItemText>
      <FormControl>
        <InputLabel id={`label-form-${user.id ?? ''}`}>ROL</InputLabel>
        <Select
          labelId={`label-form-${user.id ?? ''}`}
          value={user.rol}
          label='Rol'
          size='small'
          onChange={(evt) => { handleChangeRol(evt.target.value, user as User) }}
        >
          <MenuItem value='admin'>Admin</MenuItem>
          <MenuItem value='usuario'>Usuario</MenuItem>
          <MenuItem value='cocinero'>Cocinero</MenuItem>
          <MenuItem value='cajero'>Cajero</MenuItem>
        </Select>
      </FormControl>
    </ListItem>
  )
}
