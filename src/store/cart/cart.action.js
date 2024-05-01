import { CART_ACTION_TYPES } from "./cart.type";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItem = (cartItems, productId) => {
  return cartItems.filter((cartItem) => cartItem.id !== productId);
};

const adjustItemQuantity = (cartItems, productId, newQuantity) => {
  if (newQuantity === 0) {
    return removeItem(cartItems, productId);
  } else {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === productId
        ? { ...cartItem, quantity: newQuantity }
        : cartItem
    );
    return updatedCartItems;
  }
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeCartItem = (cartItems, productId) => {
  const newCartItems = removeItem(cartItems, productId);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const adjustQuantity = (cartItems, productId, newQuantity) => {
  const newCartItems = adjustItemQuantity(cartItems, productId, newQuantity);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
