import { Button, CircularProgress, Stack, TextField } from '@mui/material'
import { Formik } from 'formik'
import PasswordTextField from '../PasswordTextField'
import loginSchema from '@/utils/yup/loginSchema'
import { useUserSession } from '@/store/user'

export default function LoginForm () {
  const userInfo = useUserSession(state => state.userInfo)
  const loginUser = useUserSession(state => state.loginUser)
  console.log({ userInfo })
  return (
    <Formik
      initialValues={{ email: '', clave: '' }}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        loginUser(values)
          .then(_data => {})
          .catch(error => {
            console.error({ error })
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
          handleSubmit()
        }}
        >
          <Stack gap={2}>
            <TextField
              variant='standard'
              name='email'
              label='Email'
              color={errors.email ? 'error' : 'primary'}
              error={errors.email && touched.email ? true : undefined}
              helperText={errors.email && touched.email && errors.email}
              placeholder='Johndoe@mail.com'
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
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
            {
              isSubmitting
                ? (
                  <Button variant='contained' disabled endIcon={<CircularProgress size={16} />}>
                    Cargando...
                  </Button>
                  )
                : (
                  <Button variant='contained' type='submit'>
                    Iniciar Sesión
                  </Button>
                  )
              }
          </Stack>
        </form>
      )}
    </Formik>
  )
}
