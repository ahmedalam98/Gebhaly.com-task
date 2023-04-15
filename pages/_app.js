import "@/styles/globals.css";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer.component";
import { ProductsProvider } from "@/contexts/products.context";
import { CartProvider } from "@/contexts/cart.context";

export default function App({ Component, pageProps }) {
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
