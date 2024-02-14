import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { Button } from '../../../components/Button'
import { useCart } from '../../../store/useCart'
import { CheckoutItem } from '../CheckoutItem'
import {
  Close,
  Content,
  ControlsContainer,
  ItemContainer,
  Overlay,
} from './styles'

export function Checkout() {
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

        <div>
          <ItemContainer>
            {cart.map((item, index) => {
              return <CheckoutItem key={index} item={item} />
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
            <Button>Continuar com a entrega</Button>
          </ControlsContainer>
        </div>
      </Content>
    </Dialog.Portal>
  )
}
