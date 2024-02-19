import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useDispatch } from 'react-redux'

import { Button } from '../../../../../components/Button'
import { setCheckoutPage, setOpen } from '../../../../../store/sliceCart'
import { Close, Content, ControlsContainer, Overlay } from './styles'

interface ConfirmationProps {
  orderId?: string
}

export function Confirmation({ orderId }: ConfirmationProps) {
  const dispatch = useDispatch()

  function handleOpenModal() {
    dispatch(setOpen(false))
    dispatch(setCheckoutPage(''))
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} />
        </Close>
        <h2>Pedido realizado - {orderId}</h2>

        <div>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </div>

        <ControlsContainer>
          <Button onClick={handleOpenModal}>Concluir</Button>
        </ControlsContainer>
      </Content>
    </Dialog.Portal>
  )
}
