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

export interface ItemSupply {
  rubro: string
  denominacion: string
  precioCompra: number
  fecha: string
  precioVenta: number
  stockActual: number
  stockMinimo: number
  unidadMedida: string
  esInsumo: boolean
  baja: boolean
}
