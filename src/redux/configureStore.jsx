import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice.jsx';

export const store = configureStore({
  reducer: {
    [modalSlice.name]: modalSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
