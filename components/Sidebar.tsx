import { FoodBank, Logout, LunchDining, OtherHouses } from '@mui/icons-material'
import { Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const menuSections = [
  {
    title: 'MENÚS',
    path: '/menus',
    icon: <LunchDining />
  },
  {
    title: 'MIS PEDIDOS',
    path: '/misPedidos',
    icon: <FoodBank />
  },
  {
    title: 'DIRECCIONES',
    path: '/direcciones',
    icon: <OtherHouses />
  },
  {
    title: 'CERRAR SESIÓN',
    path: '/',
    icon: <Logout />
  }
]
export default function Sidebar () {
  return (
    <Drawer variant='persistent' open>
      {menuSections.map((section) => (
        <ListItem key={section.title}>
          <ListItemButton>
            <ListItemIcon>
              {section.icon}
            </ListItemIcon>
            <ListItemText primary={section.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </Drawer>
  )
}
