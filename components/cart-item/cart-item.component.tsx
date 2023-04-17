import styles from "./cart-item.module.scss";

interface CartItem {
  title: string;
  quantity: number;
  price: number;
}

interface CartItemProps {
  cartItem: CartItem;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
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
