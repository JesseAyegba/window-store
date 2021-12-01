import { combineReducers, createStore } from "redux";
import { cart } from "./cart";

const rootReducer = combineReducers({
  cart: cart,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
