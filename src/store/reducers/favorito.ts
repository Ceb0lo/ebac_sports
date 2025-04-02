import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoSlice = {
  itens: Produto[]
}

const initialState: FavoritoSlice = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const itemExistente = state.itens.find(
        (item) => item.id === action.payload.id
      )
      if (itemExistente) {
        state.itens = state.itens.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
