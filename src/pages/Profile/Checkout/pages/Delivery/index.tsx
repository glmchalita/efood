import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { AnyZodObject } from 'zod'

import { Button } from '../../../../../components/Button'
import { TextInput } from '../../../../../components/TextInput'
import { setCheckoutPage } from '../../../../../store/sliceCart'
import { newOrderPaymentSchema } from '../..'
import { Close, Content, ControlsContainer, HalfInput, Overlay } from './styles'

interface DeliveryProps {
  handleCurrentSchema: (schema: AnyZodObject) => void
}

export function Delivery({ handleCurrentSchema }: DeliveryProps) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext()

  const dispatch = useDispatch()

  function handleNextPage() {
    trigger().then((isValid) => {
      if (isValid) {
        handleCurrentSchema(newOrderPaymentSchema)
        dispatch(setCheckoutPage('payment'))
      }
    })
  }

  function handlePreviousPage() {
    dispatch(setCheckoutPage(''))
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} />
        </Close>

        <h2>Entrega</h2>

        <div>
          <TextInput
            label="Quem irá receber"
            type="text"
            required
            error={errors.receiver}
            {...register('receiver')}
          />

          <TextInput
            label="Endereço"
            type="text"
            required
            error={errors.address}
            {...register('address')}
          />

          <TextInput
            label="Cidade"
            type="text"
            required
            error={errors.city}
            {...register('city')}
          />

          <HalfInput>
            <TextInput
              label="CEP"
              type="text"
              required
              error={errors.zipCode}
              {...register('zipCode')}
            />

            <TextInput
              label="Número"
              type="number"
              required
              error={errors.number}
              {...register('number', { valueAsNumber: true })}
            />
          </HalfInput>

          <TextInput
            label="Complemento (opcional)"
            type="text"
            required
            {...register('complement')}
          />
        </div>

        <ControlsContainer>
          <Button onClick={handleNextPage}>Continuar com o pagamento</Button>

          <Button onClick={handlePreviousPage}>Voltar para o carrinho</Button>
        </ControlsContainer>
      </Content>
    </Dialog.Portal>
  )
}
