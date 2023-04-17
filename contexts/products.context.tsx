import { createContext, useState, useEffect, ReactNode } from "react";

import Spinner from "@/components/spinner/spinner.component";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

interface ProductsContextType {
  products: Product[];
}

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
});

interface Props {
  children: ReactNode;
}

export const ProductsProvider = ({ children }: Props): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?sort=desc"
        );
        const data = await response.json();
        // manual sorting to incoming categories
        const electronics = data.filter(
          (product: Product) => product.category === "electronics"
        );
        const jewelery = data.filter(
          (product: Product) => product.category === "jewelery"
        );
        const menClothing = data.filter(
          (product: Product) => product.category === "men's clothing"
        );
        const womenClothing = data.filter(
          (product: Product) => product.category === "women's clothing"
        );
        const sortedProducts = [
          ...electronics,
          ...jewelery,
          ...menClothing,
          ...womenClothing,
        ];
        setProducts(sortedProducts);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const value: ProductsContextType = { products };
  return (
    <ProductsContext.Provider value={value}>
      {isLoading ? <Spinner /> : children}
    </ProductsContext.Provider>
  );
};
