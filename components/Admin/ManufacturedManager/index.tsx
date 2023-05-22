import { Add, ArrowBackIos } from '@mui/icons-material'
import { Button, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import DishFormModal from './FormModal'
import useToggle from '@/hooks/useToggle'
import { ItemManufactured } from '@/utils/types'
import useDishes from '@/hooks/useDishes'
import DishCard from './DishCard'

export default function ManufacturedManager ({ initialItems }: { initialItems: ItemManufactured[] }) {
  const { dishes } = useDishes({ initialItems })
  const [open, handleFormModal] = useToggle()
  return (
    <Container maxWidth='md'>
      <Typography variant='h5' component='h1' fontWeight='900' textAlign='center' marginBottom={4}>
        ARTÍCULOS MANUFACTURADOS
      </Typography>
      <Stack flexDirection='row' justifyContent='space-between' alignItems='center'>
        <Link href='/admin'>
          <Button startIcon={<ArrowBackIos />} size='small'>
            Ir a Admin
          </Button>
        </Link>
        <Button startIcon={<Add />} sx={{ width: 'fit-content' }} onClick={handleFormModal}>
          Agregar Plato
        </Button>
      </Stack>
      <DishFormModal open={open} handleClose={handleFormModal} />
      {!dishes?.length && <Typography textAlign='center'>No hay platos aún!</Typography>}
      <Stack direction='row' gap={2} flexWrap='wrap' justifyContent='center'>
        {dishes.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </Stack>
    </Container>
  )
}