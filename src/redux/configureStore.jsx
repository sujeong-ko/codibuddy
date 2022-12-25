import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice.jsx';
import userSlice from './userSlice.jsx';
import { studyApi } from './api.jsx';

export const store = configureStore({
  reducer: {
    [modalSlice.name]: modalSlice.reducer,
    user: userSlice,
    [studyApi.reducerPath]: studyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studyApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
