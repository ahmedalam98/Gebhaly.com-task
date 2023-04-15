import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext({
  products: [],
  // singleCategory: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?sort=desc"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
