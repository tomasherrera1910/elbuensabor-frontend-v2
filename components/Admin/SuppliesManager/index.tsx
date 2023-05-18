import { ItemSupply } from '@/utils/types'
import { Button, Container, Stack, Typography } from '@mui/material'
import FormModal from './FormModal'
import useToggle from '@/hooks/useToggle'
import { Add } from '@mui/icons-material'
import useSupplies from '@/hooks/useSupplies'
import SupplyCard from './SupplyCard'

export default function SuppliesManager ({ initialSupplies }: { initialSupplies: ItemSupply[] }) {
  const [showModalForm, handleModalForm] = useToggle()
  const { supplies, addNewSupply, updateSupply } = useSupplies({ initialSupplies })
  return (
    <Container maxWidth='md'>
      <Typography variant='h5' component='h1' fontWeight='900' textAlign='center' marginBottom={4}>
        ARTÍCULOS INSUMOS
      </Typography>
      <Button startIcon={<Add />} onClick={handleModalForm}>
        Agregar Artículo
      </Button>
      <FormModal open={showModalForm} handleSupplies={addNewSupply} handleClose={handleModalForm} />
      {!supplies?.length && <Typography textAlign='center'>No hay artículos aún!</Typography>}
      <Stack direction='row' gap={2} flexWrap='wrap' justifyContent='center'>
        {supplies.map(supply => (
          <SupplyCard key={supply.id} supply={supply} updateSupply={updateSupply} />
        ))}
      </Stack>
    </Container>
  )
}
