import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

export const initialState = {
  filters: {
    brands: [],
    stock: false,
  },
  keyword: "",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BRAND:
      return {
        ...state,
        filters: {
          ...state.filters,
          brands: [...state.filters.brands, action.payload],
        },
      };
    case TOGGLE_STOCK:
      return {};
    default:
      return state;
  }
};
