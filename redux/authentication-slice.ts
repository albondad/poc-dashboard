import { createSlice } from '@reduxjs/toolkit';

export const authenticationSlice: any = createSlice({
  name: 'authentication',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    authenticate: (state: any) => {
      console.log('[remove me] authenticate called');
      state.isAuthenticated = true;
    },
    unauthenticate: (state: any) => {
      state.isAuthenticated = false;
    },
  },
});
