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

  const addProductToCart = () => addItemToCart(product);

  return (
    <Card sx={{ maxWidth: 230 }} className={styles.card}>
      <Link href={`/products/category/${product.category}`} passHref>
        <CardMedia
          component="a"
          href={`/products/category/${product.category}`}
          sx={{ height: 200, width: 200, marginLeft: 2 }}
          image={product.image}
          alt={product.title}
        />
      </Link>
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
        <CenteredButton onClick={addProductToCart} />
      </CardContent>
    </Card>
  );
}

export default ProductCard;
