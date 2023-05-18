import { useUserSession } from '@/store/user'
import { editInfo, postInfo } from '@/utils/CRUDActions'
import { ItemSupply } from '@/utils/types'
import { useState } from 'react'

interface Params {
  edit: boolean
  handleSupplies: (item: ItemSupply) => void
}
const useSuppliesForm = ({ edit, handleSupplies }: Params) => {
  const [response, setResponse] = useState< null | Record<string, string>>(null)
  const userInfo = useUserSession(state => state.userInfo)
  const postSubmit = (values: any, setSubmitting: (v: boolean) => void) => {
    postInfo('articulosInsumo', userInfo?.token, values)
      .then((newSupply: ItemSupply) => {
        handleSupplies(newSupply)
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
    editInfo(`articulosInsumo/${values.id as string}`, userInfo?.token, values)
      .then((newSupply: ItemSupply) => {
        handleSupplies(newSupply)
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
export default useSuppliesForm
