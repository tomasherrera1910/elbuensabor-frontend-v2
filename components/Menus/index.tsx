import { type ItemManufactured } from '@/utils/types'
import { Container, Stack, useMediaQuery, useTheme } from '@mui/material'
import MenuCard from './MenuCard'
import { useCart } from '@/store/cart'

interface Props {
  items: ItemManufactured[]
}
export default function Menus ({ items }: Props) {
  const theme = useTheme()
  const xlScreen = useMediaQuery(theme.breakpoints.up('xl'))
  const { cart } = useCart()
  return (
    <>
      <Container maxWidth={xlScreen ? 'lg' : 'md'}>
        <Stack flexDirection='row' flexWrap='wrap' justifyContent='center' gap={2}>
          {items.map(dish => (
            <MenuCard key={dish.id} dish={dish} cart={cart} />
          ))}
        </Stack>
      </Container>
    </>
  )
}
