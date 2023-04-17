import { useContext } from "react";
import { CartContext } from "@/contexts/cart.context";

import Link from "next/link";
import CartItem from "../cart-item/cart-item.component";
import CenteredButton from "../button/button.component";

import styles from "./cart-dropdown.module.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {/* Guard-clause to show text in case no products found in cart */}
        {cartItems.length === 0 && (
          <span className={styles.text}>Your Cart is Empty</span>
        )}
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      {/* Guard-clause to show the checkout button in case products found in cart */}
      {cartItems.length !== 0 && (
        <Link href="/checkout">
          <CenteredButton variant="checkout" />
        </Link>
      )}
    </div>
  );
};

export default CartDropdown;
