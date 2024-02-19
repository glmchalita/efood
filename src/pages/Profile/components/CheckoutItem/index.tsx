import { Trash2 } from 'lucide-react'
import { useDispatch } from 'react-redux'

import { Cart, removeItem } from '../../../../store/sliceCart'
import { ItemContent } from './styles'

export function CheckoutItem({ item }: { item: Cart }) {
  const dispatch = useDispatch()

  function handleDeleteItem() {
    dispatch(removeItem(item))
  }

  return (
    <ItemContent>
      <img src={item.image} alt="" />

      <div>
        <h3>{item.title}</h3>
        <span>
          {item.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>

      <button onClick={handleDeleteItem}>
        <Trash2 size={16} />
      </button>
    </ItemContent>
  )
}
