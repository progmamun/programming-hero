const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  products: [],
};

const getProducts = createAsyncThunk("products/getProduct", async () => {});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
