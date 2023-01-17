import { ADD_TO_CART } from "../actionTypes/actionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
