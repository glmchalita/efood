import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { Button } from '../../../../../components/Button'
import { useCart } from '../../../../../store/useCart'
import { CheckoutItem } from '../../../components/CheckoutItem'
import {
  Close,
  Content,
  ControlsContainer,
  ItemContainer,
  Overlay,
} from './styles'

interface CartProps {
  handleNextPage: (page: 'delivery' | 'payment' | 'confirmation') => void
}

export function Cart({ handleNextPage }: CartProps) {
  const cart = useCart()

  const totalPrice = cart.reduce((total, currentItem) => {
    return (total += currentItem.price)
  }, 0)

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} />
        </Close>

        <ItemContainer>
          {cart.map((item) => {
            return <CheckoutItem key={item.id} item={item} />
          })}
        </ItemContainer>

        <ControlsContainer>
          <div>
            <span>Valor total</span>
            <span>
              {totalPrice.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          <Button onClick={() => handleNextPage('delivery')}>
            Continuar com a entrega
          </Button>
        </ControlsContainer>
      </Content>
    </Dialog.Portal>
  )
}
