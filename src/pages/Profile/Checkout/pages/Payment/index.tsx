import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { Button } from '../../../../../components/Button'
import { Close, Content, ControlsContainer, Overlay } from './styles'

interface PaymentProps {
  handleNextPage: (page: 'delivery' | 'payment' | 'confirmation' | '') => void
}

export function Payment({ handleNextPage }: PaymentProps) {
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
          <Button onClick={() => handleNextPage('delivery')}>
            Continuar com a entrega
          </Button>
        </ControlsContainer>
      </Content>
    </Dialog.Portal>
  )
}
