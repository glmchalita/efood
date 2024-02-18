import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'

import { useCart } from '../../../store/useCart'
import { Cart } from './pages/Cart'
import { Confirmation } from './pages/Confirmation'
import { Delivery } from './pages/Delivery'
import { Payment } from './pages/Payment'

const newOrderFormSchema = z.object({
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

export const newOrderPaymentSchema = z.object({
  cardName: z.string().min(1, 'Informe o nome no cartão'),
  cardNumber: z.string().min(1, 'Informe o número do cartão'),
  cardCode: z
    .number({ invalid_type_error: 'Informe o CVV' })
    .min(1, 'Informe o CVV'),
  expireMonth: z
    .number({ invalid_type_error: 'Informe o mês' })
    .min(1, 'Informe o mês de vencimento'),
  expireYear: z
    .number({ invalid_type_error: 'Informe o ano' })
    .min(1, 'Informe o ano de vencimento'),
})

export const newOrderDeliverySchema = z.object({
  receiver: z.string().min(1, 'Informe quem vai receber'),
  address: z.string().min(1, 'Informe o endereço'),
  city: z.string().min(1, 'Informe a cidade'),
  zipCode: z.string().min(1, 'Informe o CEP'),
  number: z.number({ invalid_type_error: 'Informe o número' }).min(1),
  complement: z.string(),
})

type NewOrderFormInput = z.infer<typeof newOrderFormSchema>

export function Checkout() {
  const [currentSchema, setCurrentSchema] = useState<z.AnyZodObject>(
    newOrderDeliverySchema,
  )
  const { checkoutPage } = useCart()
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
        return <Payment handleCurrentSchema={handleCurrentSchema} />

      case 'confirmation':
        return <Confirmation />

      default:
        return <Cart />
    }
  }

  function handleNewOrder(data: NewOrderFormInput) {
    console.log(data)
  }

  return (
    <FormProvider {...newOrderForm}>
      <form id="newOrder" onSubmit={handleSubmit(handleNewOrder)}>
        {getPage()}
      </form>
    </FormProvider>
  )
}
