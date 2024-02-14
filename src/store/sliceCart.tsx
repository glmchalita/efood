import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { store } from '.'

export interface Cart {
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
      const newContact = {
        image: payload.image,
        title: payload.title,
        price: payload.price,
      }

      return [...state, newContact]
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
    // removeContact(state, { payload }: PayloadAction<Contact>) {
    //   const contactsWithoutDeletedOne = state.filter(
    //     (contact) => contact.id !== payload.id,
    //   )

    //   return [...contactsWithoutDeletedOne]
    // },
  },
})

export default sliceCart.reducer
export const { addItem } = sliceCart.actions
export type stateType = ReturnType<typeof store.getState>
