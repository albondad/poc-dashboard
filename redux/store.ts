import { configureStore } from '@reduxjs/toolkit';

// import other module
import { authenticationSlice } from '.';

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
  },
});
