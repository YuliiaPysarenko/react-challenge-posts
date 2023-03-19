import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: null,
    loading: false
  },
  reducers: {
    login: (state, {payload}) => {
      state.auth = payload;
      state.loading = false;
    },
    logout: (state) => {
      state.auth = null;
      state.loading = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;