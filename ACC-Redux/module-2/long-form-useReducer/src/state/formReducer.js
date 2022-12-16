import { actionTypes } from "./actionTypes";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  education: "",
  quantity: 0,
  feedback: "",
  term: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.TOGGLE:
      return {
        ...state,
        term: !state.term,
      };
    default:
      return state;
  }
};
