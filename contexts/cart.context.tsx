import { createContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
  cartItems: CartItem[];
  addItemToCart: (cartItemToAdd: CartItem) => void;
  removeItemToCart: (cartItemToRemove: CartItem) => void;
  clearItemFromCart: (cartItemToClear: CartItem) => void;
  cartTotal: number;
}

export const CartContext = createContext<CartContextType>({
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
const addCartItem = (
  cartItems: CartItem[],
  cartItemToAdd: CartItem
): CartItem[] => {
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
const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // check if existingCartItem is defined and quantity is equal to 1, if it is remove that item from the cart
  //existingCartItem && --> checking if existingCartItem is defined before accessing the quantity property
  if (existingCartItem && existingCartItem.quantity === 1) {
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
const clearCartItem = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
): CartItem[] =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
///////////////////////////////////////////////////////////////////////////////////////////
interface Props {
  children: ReactNode;
}

export const CartProvider = ({ children }: Props): JSX.Element => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // get back cartItems from local storage if available, otherwise return an empty array
    return JSON.parse(localStorage.getItem("cartItems") || "[]");
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
  const addItemToCart = (cartItemToAdd: CartItem): void => {
    setCartItems(addCartItem(cartItems, cartItemToAdd));
  };

  const removeItemToCart = (cartItemToRemove: CartItem): void => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear: CartItem): void => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  // Sync cartItems
  useEffect(() => {
    // when cartItems array changes anytime, then save cartItems to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const value: CartContextType = {
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
