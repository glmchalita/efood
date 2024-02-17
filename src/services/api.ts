import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RestaurantInput } from '../store/sliceCart'

interface CheckoutPayload {
  products: [
    {
      id: number
      price: number
    },
  ]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantInput[], void>({
      query: () => 'restaurantes',
    }),
    checkout: builder.mutation<any, CheckoutPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetRestaurantsQuery, useCheckoutMutation } = api

export default api
