import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import logo from "../../Images/store-logo.png";

const NavBar = () => {
  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <img src={logo} alt="Commerce.js" height="30px" />
            Commerce.js
          </Typography>
          <div />
          <div>
            <IconButton aria-label="Show Cart Items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
