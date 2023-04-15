import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ShoppingCart } from "@mui/icons-material";

function ShoppingCartIcon() {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div onClick={toggleIsCartOpen}>
      <ShoppingCart
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
