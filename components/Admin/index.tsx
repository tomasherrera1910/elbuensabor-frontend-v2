import { AccessibilityNew, Egg, EmojiEvents, Groups3, LunchDining, MonetizationOn, Money } from '@mui/icons-material'
import { Button, Container, Divider, Stack, Typography } from '@mui/material'
import Link from 'next/link'

const MENU_OPTIONS = [
  {
    title: 'Asignación de roles de usuario',
    icon: <Groups3 />,
    path: '/admin/roleManager'
  },
  {
    title: 'Artículos Insumo',
    icon: <Egg />,
    path: '/admin/supplies'
  },
  {
    title: 'Platos',
    icon: <LunchDining />,
    path: '/admin/manufactured'
  },
  {
    title: 'Más Pedidos',
    icon: <EmojiEvents />,
    path: '/admin/'
  },
  {
    title: 'Clientes frecuentes',
    icon: <AccessibilityNew />,
    path: '/admin/'
  },
  {
    title: 'Ingresos',
    icon: <MonetizationOn />,
    path: '/admin/'
  },
  {
    title: 'Ganancias',
    icon: <Money />,
    path: '/admin/'
  }
]
export default function AdminMenu () {
  return (
    <Container maxWidth='sm'>
      <Typography variant='h5' component='h1' fontWeight='900' textAlign='center' marginBottom={4}>
        PANEL DE ADMINISTRADOR
      </Typography>
      <Stack justifyContent='center' alignItems='center' gap={2} divider={<Divider orientation='horizontal' light variant='middle' flexItem />}>
        {MENU_OPTIONS.map(option => (
          <Link href={option.path} key={option.title} style={{ width: '100%' }}>
            <Button startIcon={option.icon} size='large' variant='outlined' sx={{ width: '100%' }}>
              {option.title}
            </Button>
          </Link>
        ))}
      </Stack>
    </Container>
  )
}
