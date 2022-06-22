import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const Product = ({ product, onAddToCart }) => {

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        sx={{ height: 0, paddingTop: "56.25%" }}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"></Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
