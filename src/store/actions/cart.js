import { actionTypes } from "./actionTypes";

export const addToCart = (item) => {
  return {
    type: actionTypes.ADD_ITEM_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_CART,
    payload: item,
  };
};
