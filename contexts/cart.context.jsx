import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

///////////////////////////////
// Helper Functions
///////////////////////////////
// helper function to check if the product exist to increase the quantity, or not to add the product itself
const addCartItem = (cartItems, cartItemToAdd) => {
  // find if cartItems contains cartItemToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if not, return new array with modified cartItems / new cart item after clicking ( Add To Cart button )
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
///////////////////////////////
const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
///////////////////////////////
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

///////////////////////////////////////////////////////////////////////////////////////////

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    // get back cartItems from local storage if available, otherwise return an empty array
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  // cart total price
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      // total --> as reduce accumulator
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  ////////////////////////////
  // Features functions setting cartItems with helper functions
  ////////////////////////////
  const addItemToCart = (cartItemToAdd) => {
    setCartItems(addCartItem(cartItems, cartItemToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  // Sync cartItems
  useEffect(() => {
    // when cartItems array changes anytime, then save cartItems to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
