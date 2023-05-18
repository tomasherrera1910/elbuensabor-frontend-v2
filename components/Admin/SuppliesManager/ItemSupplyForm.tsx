import itemSupplySchema from '@/utils/yup/supplyItemSchema'
import { Alert, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, Stack, TextField, useMediaQuery, useTheme } from '@mui/material'
import { Formik } from 'formik'
import { type ItemSupply } from '@/utils/types'
import useSuppliesForm from '@/hooks/useSuppliesForm'

interface Props {
  handleSupplies: (supply: ItemSupply) => void
  edit?: boolean
  actualItem?: ItemSupply
}
export default function ItemSupplyForm ({ handleSupplies, edit = false, actualItem = undefined }: Props) {
  const theme = useTheme()
  const tabletOrHigherScreen = useMediaQuery(theme.breakpoints.up('sm'))
  const initialValues = edit && actualItem ? actualItem : { rubro: '', denominacion: '', precioCompra: '', precioVenta: '', stockActual: '', stockMinimo: '', unidadMedida: '' }
  const { response, handleFormSubmit } = useSuppliesForm({ edit, handleSupplies })
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={itemSupplySchema}
        onSubmit={(values, { setSubmitting }) => {
          handleFormSubmit(values, setSubmitting)
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
                    <MenuItem value='Ingrediente'>Ingrediente</MenuItem>
                    <MenuItem value='Bebida Alcohólica'>Bebida Alcohólica</MenuItem>
                    <MenuItem value='Gaseosa'>Gaseosa</MenuItem>
                    <MenuItem value='Bebida sin gas'>Bebida sin gas</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ flex: 1, width: '100%' }} size='small'>
                  <InputLabel id='label-form-supplyUDM'>Unidad de Medida</InputLabel>
                  <Select
                    labelId='label-form-supplyUDM'
                    label='Unidad de Medida'
                    id='unidadMedida'
                    name='unidadMedida'
                    value={values.unidadMedida}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.unidadMedida && touched.unidadMedida ? true : undefined}
                  >
                    <MenuItem value='Unidades'>Unidades (Huevos, Gaseosas, etc)</MenuItem>
                    <MenuItem value='Gramos'>Gramos (Harina, Carne)</MenuItem>
                    <MenuItem value='Mililitros'>Mililitros (Aceite, Leche)</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack direction={tabletOrHigherScreen ? 'row' : 'column'} gap={2}>
                <TextField
                  variant='standard'
                  name='denominacion'
                  label='Denominación'
                  placeholder='Ej: Harina'
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
                  name='precioCompra'
                  label='Precio de Compra'
                  type='number'
                  placeholder='100'
                  required
                  color={errors.precioCompra ? 'error' : 'primary'}
                  error={errors.precioCompra && touched.precioCompra ? true : undefined}
                  helperText={errors.precioCompra && touched.precioCompra && errors.precioCompra}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.precioCompra}
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
                  name='stockActual'
                  label={values.unidadMedida ? `Stock (${values.unidadMedida})` : 'Stock'}
                  type='number'
                  required
                  color={errors.stockActual ? 'error' : 'primary'}
                  error={errors.stockActual && touched.stockActual ? true : undefined}
                  helperText={errors.stockActual && touched.stockActual && errors.stockActual}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.stockActual}
                />
                <TextField
                  variant='standard'
                  name='stockMinimo'
                  label={values.unidadMedida ? `Stock mínimo (${values.unidadMedida})` : 'Stock mínimo'}
                  type='number'
                  color={errors.stockMinimo ? 'error' : 'primary'}
                  error={errors.stockMinimo && touched.stockMinimo ? true : undefined}
                  helperText={errors.stockMinimo && touched.stockMinimo && errors.stockMinimo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.stockMinimo}
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
                    {edit ? 'Editar Artículo' : 'Agregar Artículo'}
                  </Button>
                  )
              }
              {response?.error && <Alert severity='error' variant='outlined'>{response.error}</Alert>}
              {response?.success && <Alert severity='success' variant='outlined'>{response.success}</Alert>}
            </Stack>
          </form>
        )}
      </Formik>
    </>
  )
}
