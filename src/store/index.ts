import { configureStore } from '@reduxjs/toolkit';
import cart, { CartState } from './modules/cart';

export interface State {
  cart: CartState;
}

export const store = configureStore({
  reducer: {
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
