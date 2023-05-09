import { AccessibilityNew, Egg, EmojiEvents, Groups3, LunchDining, MonetizationOn, Money } from '@mui/icons-material'
import { Button, Container, Divider, Stack, Typography } from '@mui/material'

const MENU_OPTIONS = [
  {
    title: 'Asignación de roles de usuario',
    icon: <Groups3 />
  },
  {
    title: 'Artículos Insumo',
    icon: <Egg />
  },
  {
    title: 'Platos',
    icon: <LunchDining />
  },
  {
    title: 'Más Pedidos',
    icon: <EmojiEvents />
  },
  {
    title: 'Clientes frecuentes',
    icon: <AccessibilityNew />
  },
  {
    title: 'Ingresos',
    icon: <MonetizationOn />
  },
  {
    title: 'Ganancias',
    icon: <Money />
  }
]
export default function AdminMenu () {
  return (
    <Container maxWidth='md'>
      <Typography variant='h5' component='h1' fontWeight='900' textAlign='center' marginBottom={4}>
        PANEL DE ADMINISTRADOR
      </Typography>
      <Stack justifyContent='center' alignItems='center' gap={2} divider={<Divider orientation='horizontal' light variant='middle' flexItem />}>
        {MENU_OPTIONS.map(option => (
          <Button key={option.title} startIcon={option.icon} size='large' variant='outlined' sx={{ width: '100%' }}>
            {option.title}
          </Button>
        ))}
      </Stack>
    </Container>
  )
}
