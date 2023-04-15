import ProductCard from "../product-card/product-card.component";

import styles from "./products-page.module.scss";

const ProductsPage = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductsPage;
