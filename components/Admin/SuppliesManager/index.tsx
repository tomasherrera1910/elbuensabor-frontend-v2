import { ItemSupply } from '@/utils/types'
import { Container, Typography } from '@mui/material'

export default function SuppliesManager ({ initialSupplies }: { initialSupplies: ItemSupply[] }) {
  return (
    <Container maxWidth='md'>
      <Typography variant='h5' component='h1' fontWeight='900' textAlign='center' marginBottom={4}>
        ARTÍCULOS INSUMOS
      </Typography>
      {!initialSupplies?.length && <Typography textAlign='center'>No hay artículos aún!</Typography>}
    </Container>
  )
}
