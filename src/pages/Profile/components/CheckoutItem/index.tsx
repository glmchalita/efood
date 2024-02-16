import { Trash2 } from 'lucide-react'

import { Cart } from '../../../../store/sliceCart'
import { ItemContent } from './styles'

export function CheckoutItem({ item }: { item: Cart }) {
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

      <button>
        <Trash2 size={20} />
      </button>
    </ItemContent>
  )
}
