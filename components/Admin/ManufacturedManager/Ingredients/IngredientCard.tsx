import { useUserSession } from '@/store/user'
import { deleteInfo } from '@/utils/CRUDActions'
import { Ingredient } from '@/utils/types'
import { Delete } from '@mui/icons-material'
import { IconButton, Stack, Typography } from '@mui/material'

export default function IngredientCard ({ ingredient }: { ingredient: Ingredient }) {
  const userInfo = useUserSession(state => state.userInfo)
  const deleteIngredient = () => {
    deleteInfo(`articulosManuDetalle/${ingredient.id}`, userInfo?.token)
      .then(() => {})
      .catch(() => {})
  }
  return (
    <Stack direction='row' alignItems='center'>
      <Typography variant='body2'>{ingredient.nombre} <span style={{ fontSize: 12 }}>({ingredient.cantidad} {ingredient.unidadMedida})</span></Typography>
      <IconButton size='small' onClick={deleteIngredient}>
        <Delete fontSize='small' />
      </IconButton>
    </Stack>
  )
}
