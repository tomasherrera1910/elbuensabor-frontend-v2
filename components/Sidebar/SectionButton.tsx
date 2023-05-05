import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export default function SectionButton ({ icon, title, handleClick }: { icon: any, title: string, handleClick?: () => void }) {
  return (
    <ListItem>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} sx={{ display: 'flex', justifyContent: 'center' }} />
      </ListItemButton>
    </ListItem>
  )
}
