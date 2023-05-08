import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'

export default function SectionButton ({ icon, title, handleClick, path }: { icon: any, title: string, handleClick?: () => void, path?: string }) {
  return (
    <Link href={{ pathname: path ?? '' }}>
      <ListItem>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start', lg: 'center' } }}>
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} sx={{ display: 'flex', justifyContent: 'center', textAlign: { xs: 'left', md: 'center', lg: 'left' } }} />
        </ListItemButton>
      </ListItem>
    </Link>
  )
}
