import { useUserAllInfo } from '@/store/userAllInfo'
import { FoodBank, Logout, LunchDining, OtherHouses, SupervisorAccount } from '@mui/icons-material'
import { Divider, Drawer, Stack, useTheme } from '@mui/material'
import SectionButton from './SectionButton'

const menuSections = [
  {
    title: 'MENÚS',
    path: '/menus',
    icon: <LunchDining sx={{ color: '#fff' }} />
  },
  {
    title: 'MIS PEDIDOS',
    path: '/misPedidos',
    icon: <FoodBank sx={{ color: '#fff' }} />
  },
  {
    title: 'DIRECCIONES',
    path: '/direcciones',
    icon: <OtherHouses sx={{ color: '#fff' }} />
  }
]

export default function Sidebar () {
  const user = useUserAllInfo(state => state.user)
  const theme = useTheme()
  return (
    <Drawer variant='persistent' open PaperProps={{ sx: { backgroundColor: theme.palette.primary.main, color: '#fff' } }}>
      {user?.rol === 'admin' && <SectionButton icon={<SupervisorAccount sx={{ color: '#fff' }} />} title='ADMIN' />}
      <Divider />
      <Stack sx={{ flexGrow: 1 }}>
        {menuSections.map((section) => (
          <SectionButton icon={section.icon} title={section.title} key={section.title} />
        ))}
      </Stack>
      <Divider />
      <SectionButton icon={<Logout sx={{ color: '#fff' }} />} title='CERRAR SESIÓN' />
    </Drawer>
  )
}
