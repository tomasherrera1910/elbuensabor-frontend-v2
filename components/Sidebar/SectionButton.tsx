import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export default function SectionButton ({ icon, title }: { icon: any, title: string }) {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  )
}
