import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';
import { initialState } from './initialStateAuth';
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [operations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [operations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [operations.fetchCurrentUser.pending](state, action) {
      state.isRefreshing = true;
    },
    [operations.fetchCurrentUser.fulfilled](state, action) {
      state.isRefreshing = false;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
