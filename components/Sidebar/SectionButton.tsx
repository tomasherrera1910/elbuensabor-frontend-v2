import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export default function SectionButton ({ icon, title }: { icon: any, title: string }) {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} sx={{ display: 'flex', justifyContent: 'center' }} />
      </ListItemButton>
    </ListItem>
  )
}
