import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../services/hooks/useProducts';

export interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
  },
});

export const { add } = productSlice.actions;

export default productSlice.reducer;
