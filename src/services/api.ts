import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RestaurantInput } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getCart: builder.query<RestaurantInput[], void>({
      query: () => 'restaurantes',
    }),
  }),
})

export const { useGetCartQuery } = api

export default api
