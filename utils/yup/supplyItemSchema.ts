import * as yup from 'yup'

const itemSupplySchema = yup.object().shape({
  rubro: yup.string().required(),
  denominacion: yup.string().required(),
  precioCompra: yup.number().required(),
  precioVenta: yup.number(),
  stockActual: yup.number().required(),
  stockMinimo: yup.number(),
  unidadMedida: yup.string().required()
})

export default itemSupplySchema
