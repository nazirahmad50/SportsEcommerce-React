import { ActionTypes } from "./Types";

export const CartReducer = (storeData, action) => {
  let newStore = { cart: [], cartItems: 0, cartPrice: 0, ...storeData };

  switch (action.type) {
    case ActionTypes.CART_ADD:
      const p = action.payload.product;
      const q = action.payload.quantity;

      let existing = newStore.cart.find((i) => i.product.id === p.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        newStore.cart = [...newStore.cart, action.payload];
      }
      newStore.cartItems += q;
      newStore.cartPrice += p.price * q;
      return newStore;

    case ActionTypes.CART_UPDATE:
      newStore.cart = newStore.cart.map((i) => {
        if (i.product.id === action.payload.product.id) {
          const diff = action.payload.quantity - i.quantity;
          newStore.cartItems += diff;
          newStore.cartPrice += i.product.price * diff;
          return action.payload;
        } else {
          return i;
        }
      });
      return newStore;

    case ActionTypes.CART_REMOVE:
      let selection = newStore.cart.find(
        (i) => i.product.id === action.payload.product.id
      );

      newStore.cartItems -= selection.quantity;
      newStore.cartPrice -= selection.product.price;
      newStore.cart = newStore.cart.filter((i) => i !== selection);
      return newStore;

    case ActionTypes.CART_CLEAR:
      return { ...storeData, cart: [], cartItems: 0, cartPrice: 0 };

    default:
      return storeData || {};
  }
};
