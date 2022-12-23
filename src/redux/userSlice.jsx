import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user_id: '',
    pw: '',
    nickname: '',
    email: '',
  },
  reducers: {
    login: (state, action) => {
      state.user_id = action.payload;
      state.pw = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },

    // 아이디, 비번 찾기
    //   userSearch: (state, action) => {
    //     state.nickname = action.payload;
    //     state.email = action.payload;
    //   },
  },
});
