import { useCallback, useState } from 'react'

const useToggle = () => {
  const [value, setValue] = useState(false)
  const toggle = useCallback(() => {
    setValue(!value)
  }, [])
  return [value, toggle]
}
export default useToggle
