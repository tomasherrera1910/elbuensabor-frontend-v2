import * as yup from 'yup'

const manufacturedItemSchema = yup.object().shape({
  rubro: yup.string().required('Debe seleccionar un rubro'),
  denominacion: yup.string().required('Coloque la denominación del producto'),
  precioVenta: yup.number().required('Especifique el precio'),
  tiempoEstimadoCocina: yup.number().required('Especifique el tiempo que se tarda en cocinar')
  // imagen: yup.mixed().test('fileType', 'La imagen debe ser un archivo', function (value) {
  //   if (value == null) return true // Permite que el campo sea opcional (puede ser null o undefined)
  //   if (value instanceof File) return true // Valida si el valor es una instancia de la clase File (ejemplo: input de tipo file)
  //   if (value instanceof Blob && Object.prototype.hasOwnProperty.call(value, 'type') && typeof value.type === 'string') {
  //     return value.type.startsWith('image/') // Valida si el valor es un Blob con una propiedad 'type' que comienza con 'image/'
  //   }
  //   return false // Si no se cumple ninguna de las condiciones anteriores, se considera una validación fallida
  // }).required('Debe proporcionar una imagen')
})

export default manufacturedItemSchema
