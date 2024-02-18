import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useDispatch } from 'react-redux'

import { Button } from '../../../../components/Button'
import { addItem, ItemInput, setOpen } from '../../../../store/sliceCart'
import { Close, Content, Overlay, Title } from './styles'

interface FoodModalProps {
  item: ItemInput
}

export function FoodModal({ item }: FoodModalProps) {
  const dispatch = useDispatch()

  function handleAddToCart() {
    const newItem = {
      id: crypto.randomUUID(),
      image: item.foto,
      title: item.nome,
      price: item.preco,
    }
    dispatch(addItem(newItem))
    dispatch(setOpen(true))
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
            <Title>{item.nome}</Title>

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
