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
