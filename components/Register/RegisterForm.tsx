import { Alert, Button, CircularProgress, Stack, TextField } from '@mui/material'
import { Formik } from 'formik'
import PasswordTextField from '../PasswordTextField'
import registerSchema from '@/utils/yup/registerSchema'
import { postInfo } from '@/utils/CRUDActions'
import { useState } from 'react'
import Link from 'next/link'

const BackLogin = () => {
  return (
    <Link href='/'>
      <Button variant='text' size='small'>
        Ir a Login
      </Button>
    </Link>
  )
}

export default function RegisterForm () {
  const [response, setResponse] = useState < null | Record<string, string>>(null)
  return (
    <>
      <Formik
        initialValues={{ email: '', nombre: '', apellido: '', username: '', telefono: '', clave: '', confirmPassword: '' }}
        validationSchema={registerSchema}
        onSubmit={(values, { setSubmitting }) => {
          const { confirmPassword, ...restOfValues } = values
          postInfo('users', undefined, restOfValues)
            .then(data => {
              setResponse({ success: data.message })
            })
            .catch(error => {
              setResponse({ error: error.message })
            })
            .finally(() => {
              setSubmitting(false)
            })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={(evt) => {
            evt.preventDefault()
            handleSubmit(evt)
          }}
          >
            <Stack gap={2}>
              <TextField
                variant='standard'
                name='email'
                label='Email'
                placeholder='Johndoe@mail.com'
                required
                color={errors.email ? 'error' : 'primary'}
                error={errors.email && touched.email ? true : (response?.error?.includes('email'))}
                helperText={errors.email && touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <TextField
                variant='standard'
                name='nombre'
                label='Nombre'
                required
                color={errors.nombre ? 'error' : 'primary'}
                error={errors.nombre && touched.nombre ? true : undefined}
                helperText={errors.nombre && touched.nombre && errors.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nombre}
              />
              <TextField
                variant='standard'
                name='apellido'
                label='Apellido'
                required
                color={errors.apellido ? 'error' : 'primary'}
                error={errors.apellido && touched.apellido ? true : undefined}
                helperText={errors.apellido && touched.apellido && errors.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.apellido}
              />
              <TextField
                variant='standard'
                name='username'
                label='Nombre de usuario'
                required
                color={errors.username ? 'error' : 'primary'}
                error={errors.username && touched.username ? true : (response?.error?.includes('usuario'))}
                helperText={errors.username && touched.username && errors.username}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <TextField
                variant='standard'
                name='telefono'
                label='Teléfono'
                required
                color={errors.telefono ? 'error' : 'primary'}
                error={errors.telefono && touched.telefono ? true : undefined}
                helperText={errors.telefono && touched.telefono && errors.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telefono}
              />
              <PasswordTextField
                name='clave'
                label='Contraseña'
                color={errors.clave ? 'error' : 'primary'}
                error={errors.clave && touched.clave ? true : undefined}
                helperText={errors.clave && touched.clave && errors.clave}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.clave}
              />
              <PasswordTextField
                name='confirmPassword'
                label='Confirmar contraseña'
                color={errors.confirmPassword ? 'error' : 'primary'}
                error={errors.confirmPassword && touched.confirmPassword ? true : undefined}
                helperText={errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.confirmPassword}
              />
              {
              isSubmitting
                ? (
                  <Button variant='contained' disabled endIcon={<CircularProgress size={16} />}>
                    Cargando...
                  </Button>
                  )
                : (
                  <Button variant='contained' type='submit'>
                    Registrarme
                  </Button>
                  )
              }
              {response?.error && <Alert severity='error' variant='outlined'>{response.error}</Alert>}
              {response?.success && <Alert severity='success' variant='outlined' action={<BackLogin />}>{response.success}</Alert>}
            </Stack>
          </form>
        )}
      </Formik>
    </>
  )
}
