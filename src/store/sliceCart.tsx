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
        id: payload.id,
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
  },
})

export default sliceCart.reducer
export const { addItem, removeItem } = sliceCart.actions
export type stateType = ReturnType<typeof store.getState>
