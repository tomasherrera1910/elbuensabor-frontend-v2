export interface UserSession {
  id: string
  apellido: string
  nombre: string
  rol: string
  telefono: number
  token: string
  username: string
}
export interface User {
  nombre: string
  apellido: string
  username: string
  email: string
  rol: string
  telefono: string
  addresses: Address[]
  pedidos: Order[]
  id: string
}

interface Order {
  id: string
}

interface Address {
  id: string
}
type Rubro = 'Ingrediente' | 'Bebida Alcohólica' | 'Gaseosa' | 'Bebida sin gas'
type UnidadMedida = 'Unidades' | 'Gramos' | 'Mililitros'
export interface ItemSupply {
  id: string
  rubro: Rubro
  denominacion: string
  precioCompra: number
  fecha: string
  precioVenta: number
  stockActual: number
  stockMinimo: number
  unidadMedida: UnidadMedida
  esInsumo: boolean
  baja: boolean
}
interface DishImage {
  public_id: string
  url: string
}
export interface ItemManufactured {
  id: string
  rubro: string
  tiempoEstimadoCocina: number
  denominacion: string
  precioVenta: number
  imagen: DishImage
  ingredientes: string[]
}
