import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  // Check if the product already exists in cartItems
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // Product already exists in cart, update its quantity or any other property as needed
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // Product doesn't exist in cart, add it
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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartQuantity: 0,
  adjustQuantity: () => {},
  removeCartItem: () => {},
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartQuantity, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartQuantity = newCartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartQuantity: newCartQuantity,
        cartTotal: newCartTotal,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeCartItem = (productId) => {
    const newCartItems = removeItem(cartItems, productId);
    updateCartItemsReducer(newCartItems);
  };
  const adjustQuantity = (productId, newQuantity) => {
    const newCartItems = adjustItemQuantity(cartItems, productId, newQuantity);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartQuantity,
    adjustQuantity,
    removeCartItem,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
