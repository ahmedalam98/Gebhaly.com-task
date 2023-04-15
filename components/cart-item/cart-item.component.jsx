import styles from "./cart-item.module.scss";

const CartItem = ({ cartItem }) => {
  const { title, quantity, price } = cartItem;

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h2 className={styles.title}>
          {title.split(" ").slice(0, 3).join(" ")}
        </h2>
        <p>
          {quantity} x ${price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
