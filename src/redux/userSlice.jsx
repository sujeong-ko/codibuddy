import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogged: false,
    user_id: '',
    pw: '',
    nickname: '',
    email: '',
  },
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.user_id = action.payload.user_id;
      state.pw = action.payload.pw;
    },
    logout: (state) => {
      state.user_id = null;
    },

    // 아이디, 비번 찾기
    //   userSearch: (state, action) => {
    //     state.nickname = action.payload;
    //     state.email = action.payload;
    //   },
  },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
