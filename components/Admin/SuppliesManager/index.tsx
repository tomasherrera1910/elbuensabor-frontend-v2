import { ItemSupply } from '@/utils/types'
import { Button, Container, Typography } from '@mui/material'
import FormModal from './FormModal'
import useToggle from '@/hooks/useToggle'
import { Add } from '@mui/icons-material'

export default function SuppliesManager ({ initialSupplies }: { initialSupplies: ItemSupply[] }) {
  const [showModalForm, handleModalForm] = useToggle()
  return (
    <Container maxWidth='md'>
      <Typography variant='h5' component='h1' fontWeight='900' textAlign='center' marginBottom={4}>
        ARTÍCULOS INSUMOS
      </Typography>
      <Button startIcon={<Add />} onClick={handleModalForm}>
        Agregar Artículo
      </Button>
      <FormModal open={showModalForm} handleClose={handleModalForm} />
      {!initialSupplies?.length && <Typography textAlign='center'>No hay artículos aún!</Typography>}
    </Container>
  )
}