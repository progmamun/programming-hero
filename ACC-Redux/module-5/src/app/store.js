import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
