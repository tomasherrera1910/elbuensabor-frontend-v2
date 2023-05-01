import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Ingrese un email válido').required('Ingrese su email'),
  clave: Yup.string().required('Ingrese su contraseña')
})

export default loginSchema
