import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { ItemInput } from '../../Home'
import { Close, Content, FoodContainer, FoodContent, Overlay } from './styles'

export function FoodCard({ item }: { item: ItemInput }) {
  return (
    <FoodContainer>
      <FoodContent>
        <img src={item.foto} alt="" />

        <div>
          <h3>{item.nome}</h3>

          <p>{item.descricao}</p>

          <Dialog.Root>
            <Dialog.Trigger>
              <button type="button">Mais detalhes</button>
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

                  <button>
                    Adicionar ao carrinho -{' '}
                    <span>
                      {item.preco.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </span>
                  </button>
                </div>
              </Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </FoodContent>
    </FoodContainer>
  )
}
