import manufacturedItemSchema from '@/utils/yup/manufacturedItemSchema'
import { Button, CircularProgress, FormControl, Input, InputLabel, MenuItem, Select, Stack, TextField, useMediaQuery, useTheme } from '@mui/material'
import { Formik } from 'formik'
import { type ItemManufactured } from '@/utils/types'
import { postInfoFormData } from '@/utils/CRUDActions'
import { useUserSession } from '@/store/user'

interface Props {
  handleDishes?: (dish: ItemManufactured) => void
  edit?: boolean
  actualDish?: ItemManufactured
  addNewDish?: () => void
}
export default function ItemManufacturedForm ({ handleDishes, edit = false, actualDish = undefined, addNewDish = () => {} }: Props) {
  const theme = useTheme()
  const tabletOrHigherScreen = useMediaQuery(theme.breakpoints.up('sm'))
  const userInfo = useUserSession(state => state.userInfo)
  const initialValues = edit && actualDish ? actualDish : { rubro: '', denominacion: '', precioVenta: '', tiempoEstimadoCocina: '', imagen: '' }
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={manufacturedItemSchema}
        onSubmit={(values, { setSubmitting }) => {
          const data = new FormData()
          data.append('imagen', values.imagen as string | Blob)
          data.append('rubro', values.rubro)
          data.append('denominacion', values.denominacion)
          data.append('precioVenta', String(values.precioVenta))
          data.append('tiempoEstimadoCocina', String(values.tiempoEstimadoCocina))
          postInfoFormData('articulosManufacturados', userInfo?.token, data)
            .then((_response) => {
              addNewDish()
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
          setFieldValue,
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
                    defaultValue={values.rubro}
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
                <TextField
                  variant='standard'
                  name='tiempoEstimadoCocina'
                  label='Tiempo en cocinar (minutos)'
                  type='number'
                  placeholder='100'
                  required
                  color={errors.tiempoEstimadoCocina ? 'error' : 'primary'}
                  error={errors.tiempoEstimadoCocina && touched.tiempoEstimadoCocina ? true : undefined}
                  helperText={errors.tiempoEstimadoCocina && touched.tiempoEstimadoCocina && errors.tiempoEstimadoCocina}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tiempoEstimadoCocina}
                />
              </Stack>
              <Stack direction={tabletOrHigherScreen ? 'row' : 'column'} gap={2} justifyContent='center'>
                <Input
                  name='imagen'
                  type='file'
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setFieldValue('imagen', event.currentTarget.files?.[0] ?? null)
                  }}
                  onBlur={handleBlur}
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
