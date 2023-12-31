import { createSlice } from '@reduxjs/toolkit';
import { login, register, logout, refreshCurrentUser } from './auth-operations';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state) {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
