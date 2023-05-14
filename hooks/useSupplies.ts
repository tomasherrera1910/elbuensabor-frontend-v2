import { ItemSupply } from '@/utils/types'
import { useState } from 'react'

const useSupplies = ({ initialSupplies }: { initialSupplies: ItemSupply[] }) => {
  const [supplies, setSupplies] = useState(initialSupplies)
  const addNewSupply = (newSupply: ItemSupply) => {
    setSupplies([...supplies, newSupply])
  }
  return { supplies, addNewSupply }
}

export default useSupplies
