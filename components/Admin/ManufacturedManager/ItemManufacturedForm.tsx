import manufacturedItemSchema from '@/utils/yup/manufacturedItemSchema'
import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, Stack, TextField, useMediaQuery, useTheme } from '@mui/material'
import { Formik } from 'formik'
import { type ItemManufactured } from '@/utils/types'

interface Props {
  handleDishes: (dish: ItemManufactured) => void
  edit?: boolean
  actualItem?: ItemManufactured
}
export default function ItemSupplyForm ({ handleDishes, edit = false, actualItem = undefined }: Props) {
  const theme = useTheme()
  const tabletOrHigherScreen = useMediaQuery(theme.breakpoints.up('sm'))
  const initialValues = edit && actualItem ? actualItem : { rubro: '', denominacion: '', precioVenta: '', imagen: '' }
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={manufacturedItemSchema}
        onSubmit={(values, { setSubmitting }) => {
        //   handleFormSubmit(values, setSubmitting)
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
            <Stack gap={tabletOrHigherScreen ? 4 : 2}>
              <Stack direction={tabletOrHigherScreen ? 'row' : 'column'} gap={2} alignItems={tabletOrHigherScreen ? 'center' : 'flex-start'}>
                <FormControl sx={{ flex: 1, width: '100%' }} size='small'>
                  <InputLabel id='label-form-supplyRubro'>RUBRO</InputLabel>
                  <Select
                    labelId='label-form-supplyRubro'
                    label='Rubro'
                    id='rubro'
                    name='rubro'
                    value={values.rubro}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.rubro && touched.rubro ? true : undefined}
                  >
                    <MenuItem value='Pizzas'>Pizzas</MenuItem>
                    <MenuItem value='Hamburguesas'>Hamburguesas</MenuItem>
                    <MenuItem value='Lomos'>Lomos</MenuItem>
                    <MenuItem value='Empanadas'>Empanadas</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack direction={tabletOrHigherScreen ? 'row' : 'column'} gap={2}>
                <TextField
                  variant='standard'
                  name='denominacion'
                  label='Denominación'
                  placeholder='Ej: Hamburguesa doble'
                  required
                  color={errors.denominacion ? 'error' : 'primary'}
                  error={errors.denominacion && touched.denominacion ? true : undefined}
                  helperText={errors.denominacion && touched.denominacion && errors.denominacion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.denominacion}
                />
                <TextField
                  variant='standard'
                  name='precioVenta'
                  label='Precio de Venta'
                  type='number'
                  placeholder='100'
                  required={values.rubro !== 'Ingrediente'}
                  disabled={values.rubro === 'Ingrediente'}
                  color={errors.precioVenta ? 'error' : 'primary'}
                  error={errors.precioVenta && touched.precioVenta ? true : undefined}
                  helperText={errors.precioVenta && touched.precioVenta && errors.precioVenta}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.precioVenta}
                />
              </Stack>
              <Stack direction={tabletOrHigherScreen ? 'row' : 'column'} gap={2} justifyContent='center'>
                <TextField
                  variant='standard'
                  name='stockMinimo'
                  label='Imagen'
                  type='file'
                  color={errors.imagen ? 'error' : 'primary'}
                  error={errors.imagen && touched.imagen ? true : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.imagen}
                />
              </Stack>
              {
              isSubmitting
                ? (
                  <Button variant='contained' disabled endIcon={<CircularProgress size={16} />}>
                    Cargando...
                  </Button>
                  )
                : (
                  <Button variant='contained' type='submit'>
                    {edit ? 'Editar Plato' : 'Agregar Plato'}
                  </Button>
                  )
              }
              {/* {response?.error && <Alert severity='error' variant='outlined'>{response.error}</Alert>}
              {response?.success && <Alert severity='success' variant='outlined'>{response.success}</Alert>} */}
            </Stack>
          </form>
        )}
      </Formik>
    </>
  )
}
