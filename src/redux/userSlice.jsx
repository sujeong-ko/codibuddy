import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogged: false,
    token: '',
    userInfo: { user_id: '', nickname: '', email: '', point: 0 },
  },
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.token = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
    },

    tempSetUser: (state, action) => {
      state.isLogged = true;
      state.userInfo = { ...action.payload };
    },

    // 아이디, 비번 찾기
    //   userSearch: (state, action) => {
    //     state.nickname = action.payload;
    //     state.email = action.payload;
    //   },
  },
});

export default userSlice.reducer;
export const { login, logout, tempSetUser } = userSlice.actions;
