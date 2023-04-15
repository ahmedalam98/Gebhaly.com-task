import { useContext } from "react";
import { ProductsContext } from "@/contexts/products.context";

import ProductsPage from "@/components/products-page/products-page.component";

const HomePage = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);

  return (
    <div>
      <ProductsPage products={products} />
    </div>
  );
};

export default HomePage;
