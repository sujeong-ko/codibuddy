import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginIsOpen: false,
  registerIsOpen: false,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    loginToggle: (state, action) => {
      state.loginIsOpen = action.payload;
    },
    registerToggle: (state, action) => {
      state.registerIsOpen = action.payload;
    },
  },
});

export default slice;
