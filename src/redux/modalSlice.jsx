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
      state.loginIsOpen = !state.loginIsOpen;
    },
    registerToggle: (state, action) => {
      state.registerIsOpen = !state.registerIsOpen;
    },
    loginOpen: (state, action) => {
      state.loginIsOpen = true;
    },
  },
});

export default slice;
