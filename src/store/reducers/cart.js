import { actionTypes } from "../actions/actionTypes";

const getCart = () => {
  let cart = sessionStorage.getItem("cart");
  if (cart) {
    try {
      return JSON.parse(cart);
    } catch {
      sessionStorage.removeItem("cart");
    }
  }
  return [];
};
const initialState = getCart();

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART:
      const inCart = () => {
        let result = state.filter(
          (item) => item.title === action.payload.title
        );
        if (result.length > 0) {
          return true;
        }
        return false;
      };

      inCart()
        ? sessionStorage.setItem("cart", JSON.stringify(state))
        : sessionStorage.setItem(
            "cart",
            JSON.stringify([...state, action.payload])
          );
      return JSON.parse(sessionStorage.getItem("cart"));

    case actionTypes.REMOVE_ITEM_FROM_CART:
      const newCart = state.filter((item) => item.id !== action.payload.id);
      sessionStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    default:
      return state;
  }
};
