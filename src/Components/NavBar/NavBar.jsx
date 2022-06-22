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
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ totalItems }) => {
  const location = useLocation()

  

  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography component={Link} to='/' variant="h6" color="inherit" sx={{flexGrow: 1, alignItems: 'center', display: 'flex', textDecoration: 'none',}}>
            <img src={logo} alt="Commerce.js" height="30px" />
            Commerce.js
          </Typography>
          <div style={{flexGrow: 1}}/>
          {location.pathname === '/' && (
            <div>
              <IconButton component={Link} to='/cart' aria-label="Show Cart Items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
