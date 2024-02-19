import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as z from 'zod'

import { useCheckoutMutation } from '../../../services/api'
import { setCheckoutPage } from '../../../store/sliceCart'
import { useCart } from '../../../store/useCart'
import { Cart } from './pages/Cart'
import { Confirmation } from './pages/Confirmation'
import { Delivery } from './pages/Delivery'
import { Payment } from './pages/Payment'

export const newOrderDeliverySchema = z.object({
  receiver: z.string().min(1, 'Informe quem vai receber'),
  address: z.string().min(1, 'Informe o endereço'),
  city: z.string().min(1, 'Informe a cidade'),
  zipCode: z.string().min(1, 'Informe o CEP'),
  number: z.number({ invalid_type_error: 'Informe o número' }).min(1),
  complement: z.string(),
})

export const newOrderFormSchema = z.object({
  receiver: z.string().min(1, 'Informe quem vai receber'),
  address: z.string().min(1, 'Informe o endereço'),
  city: z.string().min(1, 'Informe a cidade'),
  zipCode: z.string().min(1, 'Informe o CEP'),
  number: z.number({ invalid_type_error: 'Informe o número' }).min(1),
  complement: z.string(),
  cardName: z.string().min(1, 'Informe o nome no cartão'),
  cardNumber: z.string().min(1, 'Informe o número do cartão'),
  cardCode: z.number().min(1, 'Informe o CVV'),
  expireMonth: z.number().min(1, 'Informe o mês de vencimento'),
  expireYear: z.number().min(1, 'Informe o ano de vencimento'),
})

export type NewOrderFormInput = z.infer<typeof newOrderFormSchema>

export function Checkout() {
  const [currentSchema, setCurrentSchema] = useState<z.AnyZodObject>(
    newOrderDeliverySchema,
  )
  const dispatch = useDispatch()
  const [checkout, { isSuccess, data: checkoutData }] = useCheckoutMutation()
  const { cart, checkoutPage } = useCart()
  const newOrderForm = useForm<NewOrderFormInput>({
    resolver: zodResolver(currentSchema),
  })
  const { handleSubmit } = newOrderForm

  function handleCurrentSchema(schema: z.AnyZodObject) {
    setCurrentSchema(schema)
  }

  function getPage() {
    switch (checkoutPage) {
      case 'delivery':
        return <Delivery handleCurrentSchema={handleCurrentSchema} />

      case 'payment':
        return <Payment />

      case 'confirmation':
        return <Confirmation orderId={checkoutData?.orderId} />

      default:
        return <Cart />
    }
  }

  function handleNewOrder(data: NewOrderFormInput) {
    const products = cart.map((item) => {
      return { id: item.id, price: item.price }
    })

    checkout({
      products,
      delivery: {
        receiver: data.receiver,
        address: {
          description: 'Orders',
          city: data.city,
          zipCode: data.zipCode,
          number: data.number,
          complement: data.complement,
        },
      },
      payment: {
        card: {
          name: data.cardName,
          number: data.cardNumber,
          code: data.cardCode,
          expires: {
            month: data.expireMonth,
            year: data.expireYear,
          },
        },
      },
    })

    if (isSuccess) {
      dispatch(setCheckoutPage('confirmation'))
    }
  }

  return (
    <FormProvider {...newOrderForm}>
      <form id="newOrder" onSubmit={handleSubmit(handleNewOrder)}>
        {getPage()}
      </form>
    </FormProvider>
  )
}
