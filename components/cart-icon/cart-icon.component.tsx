import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ShoppingCart } from "@mui/icons-material";
import styles from "./cart-icon.module.scss";

function ShoppingCartIcon() {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div onClick={toggleIsCartOpen}>
      <ShoppingCart
        className={styles.icon}
        sx={{
          fontSize: "2.6rem",
          color: cartItems.length === 0 ? "#151515" : "#ffa908",
          marginTop: "0.3rem",
        }}
      />
    </div>
  );
}

export default ShoppingCartIcon;
