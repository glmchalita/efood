import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useDispatch } from 'react-redux'

import { Button } from '../../../../../components/Button'
import { setCheckoutPage } from '../../../../../store/sliceCart'
import { useCart } from '../../../../../store/useCart'
import { CheckoutItem } from '../../../components/CheckoutItem'
import {
  Close,
  Content,
  ControlsContainer,
  ItemContainer,
  Overlay,
} from './styles'

export function Cart() {
  const { cart, totalPrice } = useCart()
  const dispatch = useDispatch()

  function handleNextPage() {
    dispatch(setCheckoutPage('delivery'))
  }

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
          <Button onClick={handleNextPage}>Continuar com a entrega</Button>
        </ControlsContainer>
      </Content>
    </Dialog.Portal>
  )
}
