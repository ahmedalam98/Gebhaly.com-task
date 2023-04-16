import { createContext, useState, useEffect } from "react";

import Spinner from "@/components/spinner/spinner.component";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?sort=desc"
        );
        const data = await response.json();
        // manual sorting of incoming categories
        const electronics = data.filter(
          (product) => product.category === "electronics"
        );
        const jewelery = data.filter(
          (product) => product.category === "jewelery"
        );
        const menClothing = data.filter(
          (product) => product.category === "men's clothing"
        );
        const womenClothing = data.filter(
          (product) => product.category === "women's clothing"
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

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {isLoading ? <Spinner /> : children}
    </ProductsContext.Provider>
  );
};
