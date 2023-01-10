import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PURGE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cart, { CartState } from './modules/cart';

export interface State {
  cart: CartState;
}

const persistConfig = {
  key: 'root',
  storage: storage,
};

export const rootReducers = combineReducers({
  cart,
});

const persistReducers = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE],
      },
    }),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
