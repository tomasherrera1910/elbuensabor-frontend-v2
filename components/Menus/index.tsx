import { type ItemManufactured } from '@/utils/types'
import { Container, Stack, useMediaQuery, useTheme } from '@mui/material'
import MenuCard from './MenuCard'

interface Props {
  items: ItemManufactured[]
}
export default function Menus ({ items }: Props) {
  const theme = useTheme()
  const xlScreen = useMediaQuery(theme.breakpoints.up('xl'))
  return (
    <>
      <Container maxWidth={xlScreen ? 'lg' : 'md'}>
        <Stack flexDirection='row' gap={2}>
          {items.map(dish => (
            <MenuCard key={dish.id} dish={dish} />
          ))}
        </Stack>
      </Container>
    </>
  )
}
