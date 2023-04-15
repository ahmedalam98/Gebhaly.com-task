import "@/styles/globals.css";
import Navigation from "@/components/navigation/navigation";
import { ProductsProvider } from "@/contexts/products.context";

export default function App({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Navigation />
      <Component {...pageProps} />
    </ProductsProvider>
  );
}
