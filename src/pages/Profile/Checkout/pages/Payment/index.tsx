import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { Button } from '../../../../../components/Button'
import { TextInput } from '../../../../../components/TextInput'
import { setCheckoutPage } from '../../../../../store/sliceCart'
import { useCart } from '../../../../../store/useCart'
import { NewOrderFormInput } from '../..'
import {
  CardDetails,
  CardExpiration,
  Close,
  Content,
  ControlsContainer,
  Form,
  Overlay,
} from './styles'

export function Payment() {
  const { totalPrice } = useCart()
  const {
    register,
    formState: { errors },
  } = useFormContext<NewOrderFormInput>()
  const dispatch = useDispatch()

  function handlePreviousPage() {
    dispatch(setCheckoutPage('delivery'))
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} />
        </Close>

        <h2>
          Pagamento - Valor a pagar{' '}
          {totalPrice.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </h2>

        <Form>
          <TextInput
            label="Nome no cartão"
            type="text"
            required
            containerProps={{ style: { gridArea: 'cardName' } }}
            error={errors.cardName}
            {...register('cardName')}
          />

          <CardDetails>
            <TextInput
              label="Número do cartão"
              type="text"
              required
              containerProps={{ style: { gridArea: 'cardNumber' } }}
              error={errors.cardNumber}
              {...register('cardNumber')}
            />

            <TextInput
              label="CVV"
              type="number"
              required
              containerProps={{ style: { gridArea: 'cardCode' } }}
              error={errors.cardCode}
              {...register('cardCode', { valueAsNumber: true })}
            />
          </CardDetails>

          <CardExpiration>
            <TextInput
              label="Mês de vencimento"
              type="number"
              required
              containerProps={{ style: { gridArea: 'expireMonth' } }}
              error={errors.expireMonth}
              {...register('expireMonth', { valueAsNumber: true })}
            />

            <TextInput
              label="Ano de vencimento"
              type="number"
              required
              containerProps={{ style: { gridArea: 'expireYear' } }}
              error={errors.expireYear}
              {...register('expireYear', { valueAsNumber: true })}
            />
          </CardExpiration>
        </Form>

        <ControlsContainer>
          <Button form="newOrder" type="submit">
            Finalizar pagamento
          </Button>

          <Button onClick={handlePreviousPage}>
            Voltar para a edição de endereço
          </Button>
        </ControlsContainer>
      </Content>
    </Dialog.Portal>
  )
}
