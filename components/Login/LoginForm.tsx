import { Button, Stack, TextField } from '@mui/material'
import { Formik } from 'formik'
import PasswordTextField from '../PasswordTextField'
import loginSchema from '@/utils/yup/loginSchema'

export default function LoginForm () {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
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
        <form>
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
              name='password'
              label='Contraseña'
              color={errors.password ? 'error' : 'primary'}
              error={errors.password && touched.password ? true : undefined}
              helperText={errors.password && touched.password && errors.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <Button variant='contained' color='primary' type='submit'>
              Iniciar Sesión
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  )
}
