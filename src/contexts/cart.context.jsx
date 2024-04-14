import { createContext, useState, useEffect } from "react";

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
  removeCartItem: () => {}, // Define removeItemFromCart in the context
  cartTotal: 0,
});

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0); // State to hold the total quantity of items
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    // Calculate the total quantity of items in the cart using reduce
    const totalQuantity = cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    );
    setCartQuantity(totalQuantity);
  }, [cartItems]); // Trigger the effect whenever cartItems changes

  useEffect(() => {
    // Calculate the total quantity of items in the cart using reduce
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]); // Trigger the effect whenever cartItems changes

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  // Helper function to remove an item from the cartItems array based on its ID
  const removeCartItem = (productId) => {
    setCartItems(removeItem(cartItems, productId));
  };

  const adjustQuantity = (productId, newQuantity) => {
    setCartItems(adjustItemQuantity(cartItems, productId, newQuantity));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartQuantity,
    adjustQuantity, // Add adjustQuantity to the context value
    removeCartItem,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
