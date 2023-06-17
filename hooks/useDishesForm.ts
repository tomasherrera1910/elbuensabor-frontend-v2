import { useUserSession } from '@/store/user'
import { editInfo, postInfo } from '@/utils/CRUDActions'
import { ItemManufactured } from '@/utils/types'
import { useState } from 'react'

interface Params {
  edit: boolean
  handleDishes: (item: ItemManufactured) => void
  id?: string
}
const useDishesForm = ({ edit, handleDishes, id }: Params) => {
  const [response, setResponse] = useState< null | Record<string, string>>(null)
  const userInfo = useUserSession(state => state.userInfo)
  const postSubmit = (values: any, setSubmitting: (v: boolean) => void) => {
    postInfo('articulosManufacturados', userInfo?.token, values)
      .then((newDish: ItemManufactured) => {
        handleDishes(newDish)
        setResponse({ success: '¡Articulo agregado con éxito!' })
      })
      .catch((err) => {
        setResponse({ error: err.message })
      })
      .finally(() => {
        setSubmitting(false)
      })
  }
  const putSubmit = (values: any, setSubmitting: (v: boolean) => void) => {
    editInfo(`articulosManufacturados/${id as string}`, userInfo?.token, values)
      .then((newDish: ItemManufactured) => {
        handleDishes(newDish)
        setResponse({ success: '¡Articulo actualizado con éxito!' })
      })
      .catch((err) => {
        setResponse({ error: err.message })
      })
      .finally(() => {
        setSubmitting(false)
      })
  }
  const handleFormSubmit = (values: any, setSubmitting: (v: boolean) => void) => {
    edit ? putSubmit(values, setSubmitting) : postSubmit(values, setSubmitting)
  }
  return { response, handleFormSubmit }
}
export default useDishesForm
