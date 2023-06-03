import { useUserSession } from '@/store/user'
import { postInfo } from '@/utils/CRUDActions'
import { Ingredient, type ItemSupply } from '@/utils/types'
import { Add } from '@mui/icons-material'
import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import React, { useState } from 'react'

interface Props {
  supplies: ItemSupply[]
  dishId: string
  addIngredient: (newIngredient: Ingredient) => void
}
export default function IngredientForm ({ supplies, dishId, addIngredient }: Props) {
  const userInfo = useUserSession(state => state.userInfo)
  const [quantity, setQuantity] = useState('')
  const [selectedSupply, setSelectedSupply] = useState<'' | ItemSupply>('')
  const handleSupply = (evt: SelectChangeEvent<string>) => {
    setSelectedSupply(supplies.find(s => s.id === evt.target.value) ?? '')
  }
  const handleQuantity = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(evt.target.value)
  }
  const handleAddIngredient = (evt: React.FormEvent) => {
    evt.preventDefault()
    postInfo(`articulosManuDetalle/${dishId}`, userInfo?.token, { cantidad: quantity, articuloInsumo: (selectedSupply as ItemSupply)?.id })
      .then((data) => {
        addIngredient(data)
      })
      .catch(() => {})
      .finally(() => {})
  }
  return (
    <form style={{ display: 'flex', gap: 16, alignItems: 'center' }} onSubmit={handleAddIngredient}>
      <FormControl size='small' sx={{ width: 128 }} variant='standard'>
        <InputLabel id='label-form-ingredient' size='small'>Ingrediente</InputLabel>
        <Select
          labelId='label-form-ingredient'
          onChange={handleSupply}
          variant='standard'
          label='Ingrendiente'
          defaultValue={supplies[0].id}
        >
          {supplies.map(s => (
            <MenuItem key={s.id} value={s.id}>{s.denominacion}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        variant='standard'
        label={`${(selectedSupply as ItemSupply)?.unidadMedida ?? 'Cantidad'}`}
        placeholder='Ej: 200'
        required
        size='small'
        sx={{ width: 64 }}
        value={quantity}
        onChange={handleQuantity}
      />
      <IconButton size='small' type='submit'>
        <Add />
      </IconButton>
    </form>
  )
}
