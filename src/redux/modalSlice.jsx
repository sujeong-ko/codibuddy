import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    change: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export default slice;
