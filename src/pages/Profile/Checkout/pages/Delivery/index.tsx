import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { Button } from '../../../../../components/Button'
import { Close, Content, ControlsContainer, Overlay } from './styles'

interface DeliveryProps {
  handleNextPage: (page: 'delivery' | 'payment' | 'confirmation' | '') => void
}

export function Delivery({ handleNextPage }: DeliveryProps) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} />
        </Close>

        <ControlsContainer>
          <div>
            <span>Valor total</span>
          </div>
          <Button onClick={() => handleNextPage('payment')}>
            Continuar com o pagamento
          </Button>

          <Button onClick={() => handleNextPage('')}>
            Voltar para o carrinho
          </Button>
        </ControlsContainer>
      </Content>
    </Dialog.Portal>
  )
}
