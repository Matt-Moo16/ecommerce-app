import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
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
            <Typography component={Link} to='/' variant="h3" color="#B27701" sx={{flexGrow: 1, alignItems: 'center', display: 'flex', textDecoration: 'none', fontFamily: 'Crimson Text', justifyContent: 'space-between'}}>
              <img src={logo} alt="Home" height="30px" />
              Vintager
            </Typography>
            <div style={{flexGrow: 1}}/>
            {location.pathname === '/' && (
              <div>
                <IconButton component={Link} to='/cart' aria-label="Show Cart Items" color="inherit">
                  <Badge badgeContent={totalItems} color='secondary'>
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
