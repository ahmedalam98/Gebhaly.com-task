import { useContext } from "react";
import { CartContext } from "@/contexts/cart.context";

import CartItem from "../cart-item/cart-item.component";

import styles from "./cart-dropdown.module.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  console.log(cartItems);
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
    </div>
  );
};

export default CartDropdown;
