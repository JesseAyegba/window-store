import { actionTypes } from "../actions/actionTypes";

export const cart = (state = [], action) => {
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

      return inCart() ? state : [...state, action.payload];

    default:
      return state;
  }
};
