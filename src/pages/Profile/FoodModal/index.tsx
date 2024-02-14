import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useDispatch } from 'react-redux'

import { Button } from '../../../components/Button'
import { addItem } from '../../../store/sliceCart'
import { ItemInput } from '../../Home'
import { Close, Content, Overlay } from './styles'

export function FoodModal({ item }: { item: ItemInput }) {
  const dispatch = useDispatch()

  function handleAddToCart() {
    const newItem = {
      image: item.foto,
      title: item.nome,
      price: item.preco,
    }

    dispatch(addItem(newItem))
  }

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

            <Button onClick={handleAddToCart}>
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
