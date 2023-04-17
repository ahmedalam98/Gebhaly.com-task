import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "../cart-icon/cart-icon.component";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import logo from "../../assets/logo.png";
import styles from "./navigation.module.scss";

import { useContext } from "react";
import { CartContext } from "@/contexts/cart.context";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import dynamic from "next/dynamic";

function Navigation() {
  const { isCartOpen } = useContext(CartContext);
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              className={styles.image}
              src={logo}
              alt="My Logo"
              width={160}
              height={80}
              style={{ marginTop: 5, padding: 5 }}
            />
          </Link>
        </div>

        <div className={styles.links}>
          <Link href="/">
            <Typography
              className={styles.signIn}
              component="a"
              sx={{
                marginRight: 3,
                fontSize: "1.4rem",
                color: "#151515",
                "&:hover": { color: "#ffa200" },
              }}
            >
              Sign In
            </Typography>
          </Link>
          <Link href="/checkout">
            <Typography
              className={styles.checkout}
              component="a"
              sx={{
                marginRight: 3,
                fontSize: "1.4rem",
                color: "#151515",
                "&:hover": { color: "#ffa200" },
              }}
            >
              Checkout
            </Typography>
          </Link>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </Toolbar>
      {isCartOpen && <CartDropdown />}
    </AppBar>
  );
}

// fix Unhandled Runtime Error
export default dynamic(() => Promise.resolve(Navigation), { ssr: false });
