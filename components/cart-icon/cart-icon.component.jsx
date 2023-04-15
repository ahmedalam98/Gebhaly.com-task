import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ShoppingCart } from "@mui/icons-material";

function ShoppingCartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div onClick={toggleIsCartOpen}>
      <ShoppingCart sx={{ fontSize: "2.8rem" }} style={{ color: "#fff" }} />
    </div>
  );
}

export default ShoppingCartIcon;
