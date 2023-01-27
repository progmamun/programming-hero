import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], // empty array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
