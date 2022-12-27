import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice.jsx';
import userSlice from './userSlice.jsx';
import { likeApi } from './api.jsx';

export const store = configureStore({
  reducer: {
    [modalSlice.name]: modalSlice.reducer,
    user: userSlice,
    [likeApi.reducerPath]: likeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(likeApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
