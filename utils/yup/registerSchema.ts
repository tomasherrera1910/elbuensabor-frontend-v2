import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
  email: Yup.string().email('Debe ser un correo electrónico válido').required('El correo electrónico es requerido'),
  nombre: Yup.string().max(50, 'Debe tener como máximo 50 caracteres').required('El nombre es requerido'),
  apellido: Yup.string().max(50, 'Debe tener como máximo 50 caracteres').required('El apellido es requerido'),
  username: Yup.string().matches(/^[a-zA-Z0-9]+$/, 'Debe contener solo letras y números').max(50, 'Debe tener como máximo 50 caracteres').required('El nombre de usuario es requerido'),
  telefono: Yup.string().max(20, 'Debe tener como máximo 20 caracteres').required('El número de teléfono es requerido'),
  clave: Yup.string().min(4, 'Debe tener al menos 4 caracteres').required('La contraseña es requerida'),
  confirmPassword: Yup.string().oneOf([Yup.ref('clave')], 'Las contraseñas deben coincidir').required('La confirmación de contraseña es requerida')
})

export default registerSchema
