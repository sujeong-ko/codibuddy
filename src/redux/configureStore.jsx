import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice.jsx';
import userSlice from './userSlice.jsx';

export const store = configureStore({
  reducer: {
    [modalSlice.name]: modalSlice.reducer,
    user: userSlice,
  },
});
