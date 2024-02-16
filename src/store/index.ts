import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import sliceCart from './sliceCart'

export const store = configureStore({
  reducer: {
    cart: sliceCart,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
