import Image from "next/image";

import styles from "./checkout-item.module.scss";

const CheckoutItem = ({ cartItem }) => {
  const { title, image, price, quantity } = cartItem;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={`${title}`} width="150" height="150" />
      </div>
      <span className={styles.title}> {title} </span>
      <span className={styles.quantity}>
        <div className={styles.arrow}>&#10094;</div>
        <span className={styles.value}>{quantity}</span>
        <div className={styles.arrow}>&#10095;</div>
      </span>
      <span className={styles.price}> {price} $</span>
      <div className={styles.remove}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
