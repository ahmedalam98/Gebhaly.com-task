import { useContext } from "react";
import { ProductsContext } from "@/contexts/products.context";

import ProductsPage from "@/components/products-page/products-page.component";

const HomePage = (): JSX.Element => {
  const { products } = useContext(ProductsContext);

  return <ProductsPage products={products} />;
};

export default HomePage;
