import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], // empty array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );

      if (!selectedProduct) {
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
      } else {
        selectedProduct.quantity += 1;

        state.cart
          .filter((product) => product._id !== selectedProduct._id)
          .push(selectedProduct);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
