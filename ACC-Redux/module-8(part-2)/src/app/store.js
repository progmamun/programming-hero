import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../feature/api/apiSlice";
import authSlice from "../feature/auth/authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
