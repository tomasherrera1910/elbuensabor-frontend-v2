import { ItemManufactured } from '@/utils/types'
import { ExpandMore, ShoppingCart } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useState } from 'react'

export default function MenuCard ({ dish }: { dish: ItemManufactured }) {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }
  return (
    <Card sx={{ width: 300, boxShadow: expanded ? 'auto' : 'none' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={dish.imagen.url}
        title={`${dish.denominacion} imagen`}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {dish.denominacion}
        </Typography>
        <Typography variant='h6' color='text.secondary'>
          $ {dish.precioVenta}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' sx={{ fontSize: 12 }} variant='outlined' endIcon={<ShoppingCart fontSize='small' />}>Agregar a Carrito</Button>
      </CardActions>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Ingredientes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {dish.ingredientes?.map(i => (
            <Typography variant='body1' color='text.secondary' key={i.id}>{i.nombre}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </Card>
  )
}
