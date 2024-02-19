import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { store } from '.'

export interface ItemInput {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface RestaurantInput {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ItemInput[]
}

export interface Cart {
  id: number
  image: string
  title: string
  price: number
}

interface CartReducer {
  cart: Cart[]
  totalPrice: number
  isOpen: boolean
  checkoutPage: 'delivery' | 'payment' | 'confirmation' | ''
}

const initialState: CartReducer = {
  cart: [],
  totalPrice: 0,
  isOpen: false,
  checkoutPage: '',
}

const sliceCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<Cart>) {
      const newItem = {
        id: payload.id,
        image: payload.image,
        title: payload.title,
        price: payload.price,
      }

      const totalPrice = state.totalPrice + payload.price

      return {
        ...state,
        cart: [...state.cart, newItem],
        totalPrice,
      }
    },
    removeItem(state, { payload }: PayloadAction<Cart>) {
      const cartWithoutDeletedOne = state.cart.filter(
        (item) => item.id !== payload.id,
      )

      const totalPrice = cartWithoutDeletedOne.reduce((total, currentItem) => {
        return (total += currentItem.price)
      }, 0)

      return { ...state, cart: cartWithoutDeletedOne, totalPrice }
    },
    setOpen(state, { payload }: PayloadAction<boolean>) {
      return { ...state, isOpen: payload }
    },
    setCheckoutPage(
      state,
      { payload }: PayloadAction<'delivery' | 'payment' | 'confirmation' | ''>,
    ) {
      return { ...state, checkoutPage: payload }
    },
  },
})

export default sliceCart.reducer
export const { addItem, removeItem, setOpen, setCheckoutPage } =
  sliceCart.actions
export type stateType = ReturnType<typeof store.getState>
