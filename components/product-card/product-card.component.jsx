import Link from "next/link";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CenteredButton from "../button/button.component";

import { useContext } from "react";
import { CartContext } from "@/contexts/cart.context";

import styles from "./product-card.module.scss";

function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);

  const addProductHandler = () => addItemToCart(product);

  return (
    <Card sx={{ maxWidth: 230 }} className={styles.card}>
      <CardMedia
        component="a"
        sx={{
          height: 0,
          //  to create a square aspect ratio that matches the dimensions of the specified space
          paddingTop: "100%",
          // scale the image to fit within the CardMedia component
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${product.image})`,
        }}
        alt={product.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "1.4rem" }}
        >
          {product.title.split(" ").slice(0, 4).join(" ")}
        </Typography>
        <Typography color="rgb(0, 0, 177)" sx={{ fontSize: "1.2rem" }}>
          {product.category}
        </Typography>
        <br />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "1.2rem" }}
        >
          {product.price} $
        </Typography>
      </CardContent>
      <CardContent>
        <CenteredButton onClick={addProductHandler} />
      </CardContent>
    </Card>
  );
}

export default ProductCard;
