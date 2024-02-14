import { useSelector } from 'react-redux'

import { stateType } from './sliceCart'

export function useCart() {
  return useSelector((state: stateType) => state.cart)
}
