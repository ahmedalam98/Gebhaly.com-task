import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../checkout-item/checkout-item.component";

import styles from "./checkout-page.module.scss";

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div>
      {cartItems.length === 0 ? (
        <p className={styles.message}>Your Cart Is Empty ..</p>
      ) : (
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.block}>
              <span>Product</span>
            </div>
            <div className={styles.block}>
              <span>Description</span>
            </div>
            <div className={styles.block}>
              <span>Quantity</span>
            </div>
            <div className={styles.block}>
              <span>Price</span>
            </div>
            <div className={styles.block}>
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className={styles.total}>TOTAL: {cartTotal} $</div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
