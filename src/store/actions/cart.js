import { actionTypes } from "./actionTypes";

export const addToCart = (item) => {
  return {
    type: actionTypes.ADD_ITEM_TO_CART,
    payload: item,
  };
};
