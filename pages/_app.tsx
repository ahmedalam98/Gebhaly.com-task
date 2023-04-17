import "@/styles/globals.css";
import Navigation from "@/components/navigation/navigation.component";
import Footer from "@/components/footer/footer.component";
import { ProductsProvider } from "@/contexts/products.context";
import { CartProvider } from "@/contexts/cart.context";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <CartProvider>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </ProductsProvider>
  );
}
