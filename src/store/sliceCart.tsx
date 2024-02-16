import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { store } from '.'

export interface Cart {
  id: string
  image: string
  title: string
  price: number
}

const initialState: Cart[] = []

const sliceCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<Cart>) {
      const newItem = {
        id: crypto.randomUUID(),
        image: payload.image,
        title: payload.title,
        price: payload.price,
      }

      return [...state, newItem]
    },
    removeItem(state, { payload }: PayloadAction<Cart>) {
      const cartWithoutDeletedOne = state.filter(
        (item) => item.id !== payload.id,
      )

      return [...cartWithoutDeletedOne]
    },
    // editContact(state, { payload }: PayloadAction<Contact>) {
    //   return state.map((contact) => {
    //     if (contact.id === payload.id) {
    //       return {
    //         id: contact.id,
    //         name: payload.name,
    //         email: payload.email,
    //         cel: payload.cel,
    //       }
    //     } else {
    //       return { ...contact }
    //     }
    //   })
    // },
  },
})

export default sliceCart.reducer
export const { addItem, removeItem } = sliceCart.actions
export type stateType = ReturnType<typeof store.getState>
