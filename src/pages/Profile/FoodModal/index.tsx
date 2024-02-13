import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { Button } from '../../../components/Button'
import { ItemInput } from '../../Home'
import { Close, Content, Overlay } from './styles'

export function FoodModal({ item }: { item: ItemInput }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button type="button">Mais detalhes</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <Close>
            <X size={24} />
          </Close>

          <img src={item.foto} alt="" />

          <div>
            <Dialog.Title>{item.nome}</Dialog.Title>

            <Dialog.Description>{item.descricao}</Dialog.Description>

            <span>Serve: de {item.porcao}</span>

            <Button>
              Adicionar ao carrinho -{' '}
              <span>
                {item.preco.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </Button>
          </div>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
