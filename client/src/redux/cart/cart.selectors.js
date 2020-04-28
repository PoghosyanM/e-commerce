import { createSelector } from "reselect";

const selectCart = ({ cart }) => cart;

export const selectCartItems = createSelector(
  [selectCart],
  ({ cartItems }) => cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  ({ hidden }) => hidden
);

export const selectCartItemsCount = createSelector(
  [selectCart],
  ({ cartItems }) =>
    cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCart], ({ cartItems }) =>
  cartItems.reduce((sum, { quantity, price }) => sum + quantity * price, 0)
);
