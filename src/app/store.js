import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/productListSlice.js';
//../features/counter/counterSlice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
