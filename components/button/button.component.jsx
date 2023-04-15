import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// style material UI component
const AddToCartButton = styled(Button)({
  display: "block",
  margin: "0 auto",
  padding: "1rem 2rem",
  backgroundColor: "black",
  color: "white",
  fontWeight: "bold",
  transition: "all 0.3s ease-out",
  "&:hover": {
    backgroundColor: "#333",
    transform: "scale(1.05)",
  },
});

// make a different material UI button style
const CheckoutButton = styled(Button)({
  display: "block",
  margin: "1rem auto 0",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  color: "black",
  border: "2px solid black",
  fontWeight: "bold",
  transition: "all 0.3s ease-out",
  "&:hover": {
    backgroundColor: "#eee",
    transform: "scale(1.05)",
  },
});

function CenteredButton(props) {
  // onClick ---> prop to the Button component inside the CenteredButton component to make the click event available
  // variant ---> prop to control which design we need to use
  const { onClick, variant } = props;
  return variant === "checkout" ? (
    <CheckoutButton onClick={onClick}>GO TO CHECKOUT</CheckoutButton>
  ) : (
    <AddToCartButton onClick={onClick}>ADD TO CART</AddToCartButton>
  );
}

export default CenteredButton;
