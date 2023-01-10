import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../services/hooks/useProducts';

type CartProduct = {
  product: Product;
  quantity: number;
};

export interface CartState {
  items: CartProduct[];
}

const initialState: CartState = {
  items: [],
};

export const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const existsProduct = state.items.find(
        (state) => state.product.id === action.payload.id,
      );

      if (!existsProduct) {
        state.items.push({
          product: action.payload,
          quantity: 1,
        });
      } else {
        const items = state.items.map((stateMap) =>
          stateMap.product.id === existsProduct.product.id
            ? {
                product: stateMap.product,
                quantity: stateMap.quantity + 1,
              }
            : stateMap,
        );

        state.items = items;
      }
    },
    remove: (state, action: PayloadAction<{ id: number }>) => {
      const items = state.items.filter(
        (item) => +item.product.id !== +action.payload.id,
      );

      state.items = items;
    },
  },
});

export const { add, remove } = productSlice.actions;

export default productSlice.reducer;
