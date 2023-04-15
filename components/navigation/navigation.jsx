import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "../cart-icon/cart-icon.component";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import logo from "../../assets/logo.png";
import dynamic from "next/dynamic";

const useStyles = makeStyles({
  logo: {
    flexGrow: 1,
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
  checkout: {
    display: "flex",
    alignItems: "center",
  },
});

function Navigation() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      sx={{ background: "linear-gradient(90deg, #659999, #f4791f)" }}
    >
      <Toolbar>
        <div className={classes.logo}>
          <Link href="/">
            <Image
              src={logo}
              alt="My Logo"
              width={150}
              height={75}
              style={{ marginTop: 5, padding: 5, borderRadius: 25 }}
            />
          </Link>
        </div>
        <div className={classes.checkout}>
          <Link href="/checkout">
            <Typography
              component="a"
              sx={{ marginRight: 3, fontSize: "1.4rem", fontWeight: "bold" }}
            >
              Checkout
            </Typography>
          </Link>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

// fix Unhandled Runtime Error
export default dynamic(() => Promise.resolve(Navigation), { ssr: false });
