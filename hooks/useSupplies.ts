import { ItemSupply } from '@/utils/types'
import { useState } from 'react'

const useSupplies = ({ initialSupplies }: { initialSupplies: ItemSupply[] }) => {
  const [supplies, setSupplies] = useState(initialSupplies)

  const addNewSupply = (newSupply: ItemSupply) => {
    setSupplies([...supplies, newSupply])
  }

  const updateSupply = (supply: ItemSupply) => {
    setSupplies(prevSupplies => {
      const suppliesCopy: ItemSupply[] = window.structuredClone(prevSupplies)
      const idxToUpdate = suppliesCopy.findIndex(s => s.id === supply.id)
      suppliesCopy[idxToUpdate] = supply
      return suppliesCopy
    })
  }

  return { supplies, addNewSupply, updateSupply }
}

export default useSupplies
