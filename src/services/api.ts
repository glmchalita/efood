import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RestaurantInput } from '../store/sliceCart'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantInput[], void>({
      query: () => 'restaurantes',
    }),
  }),
})

export const { useGetRestaurantsQuery } = api

export default api
