import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// style material UI component
const MyButton = styled(Button)({
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

function CenteredButton() {
  return <MyButton>Add to Cart</MyButton>;
}

export default CenteredButton;
