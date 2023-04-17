import ProductCard from "../product-card/product-card.component";
import styles from "./products-page.module.scss";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface Props {
  products: Product[];
}

const ProductsPage = ({ products }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductsPage;
