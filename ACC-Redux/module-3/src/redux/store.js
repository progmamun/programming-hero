import { createStore } from "redux";
import productReducer from "./reducers/productReducer";
const store = createStore(productReducer);

export default store;
