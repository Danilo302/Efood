import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
  isOpenCheckout: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOpenCheckout: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const menu = state.items.find((item) => item.id === action.payload.id)

      if (!menu) {
        state.items.push(action.payload)
      } else {
        alert('Este item já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    OpenCheckout: (state) => {
      state.isOpenCheckout = state.isOpenCheckout ? false : true
    }
  }
})

export const { open, close, add, remove, OpenCheckout } = cartSlice.actions
export default cartSlice.reducer
