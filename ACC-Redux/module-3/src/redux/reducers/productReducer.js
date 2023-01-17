import { ADD_TO_CART, REMOVE_TO_CART } from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_TO_CART:
      return {};

    default:
      return state;
  }
};

export default productReducer;
