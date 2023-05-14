import * as yup from 'yup'

const itemSupplySchema = yup.object().shape({
  rubro: yup.string().required('Debe seleccionar un rubro'),
  denominacion: yup.string().required('Coloque la denominación del producto'),
  precioCompra: yup.number().required('Coloque el precio de compra del producto'),
  precioVenta: yup.number(),
  stockActual: yup.number().required('Coloque el stock del producto'),
  stockMinimo: yup.number(),
  unidadMedida: yup.string().required('Debe seleccionar una unidad de medida')
})

export default itemSupplySchema
