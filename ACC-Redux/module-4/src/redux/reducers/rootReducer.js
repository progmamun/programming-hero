import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  product: productReducer,
  filter: filterReducer,
});

export default rootReducer;
