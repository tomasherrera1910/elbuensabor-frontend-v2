import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'

export default function SectionButton ({ icon, title, handleClick, path }: { icon: any, title: string, handleClick?: () => void, path?: string }) {
  return (
    <Link href={path ?? '/'}>
      <ListItem>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} sx={{ display: 'flex', justifyContent: 'center' }} />
        </ListItemButton>
      </ListItem>
    </Link>
  )
}
