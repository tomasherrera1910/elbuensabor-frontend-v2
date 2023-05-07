import { useUserAllInfo } from '@/store/userAllInfo'
import { Close, FoodBank, Logout, LunchDining, OtherHouses, SupervisorAccount } from '@mui/icons-material'
import { Container, Divider, Drawer, Stack, useMediaQuery, useTheme } from '@mui/material'
import SectionButton from './SectionButton'
import { useState } from 'react'
import ConfirmLogout from './ConfirmLogout'

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

export default function Sidebar ({ open, handleClose }: { open: boolean, handleClose?: () => void }) {
  const user = useUserAllInfo(state => state.user)

  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => { setShowModal(!showModal) }
  return (
    <Container sx={{ display: { xs: 'none', md: 'flex' }, width: { md: 180, lg: 240 }, height: '100vh' }}>
      <Drawer variant={smallScreen ? 'temporary' : 'permanent'} open={open} onClose={handleClose} PaperProps={{ sx: { backgroundColor: theme.palette.primary.main, color: '#fff', paddingTop: { md: 8 }, width: { xs: '100vw', md: 180, lg: 260 }, position: 'fixed' } }}>
        {smallScreen && (
          <>
            <SectionButton icon={<Close sx={{ color: '#fff' }} />} title='CERRAR MENÚ' handleClick={handleClose} />
            <Divider />
          </>
        )}
        {user?.rol === 'admin' && <SectionButton icon={<SupervisorAccount sx={{ color: '#fff' }} />} title='ADMIN' path='/admin' />}
        <Divider />
        <Stack sx={{ flexGrow: 1 }}>
          {menuSections.map((section) => (
            <SectionButton icon={section.icon} title={section.title} path={section.path} key={section.title} />
          ))}
        </Stack>
        <Divider />
        <SectionButton icon={<Logout sx={{ color: '#fff' }} />} title='CERRAR SESIÓN' handleClick={handleShowModal} />
      </Drawer>
      <ConfirmLogout showModal={showModal} handleShowModal={handleShowModal} />
    </Container>
  )
}
