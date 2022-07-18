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
    <Card sx={{ maxWidth: "100%", backgroundColor: "#DFE0DF" }}>
      <CardMedia
        sx={{ height: 0, paddingTop: "56.25%" }}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontFamily: "Crimson Text" }}
          >
            {product.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{ fontFamily: "Crimson Text" }}
          >
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          sx={{ fontFamily: "Crimson Text" }}
        ></Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          onClick={() => onAddToCart(product.id, 1)}
          variant="outlined"
          color="secondary"
        >
          <Typography sx={{ fontFamily: "Crimson Text" }}>
            Add To Cart
          </Typography>
          <IconButton aria-label="Add to Cart" sx={{ color: "#B27701" }}>
            <AddShoppingCart />
          </IconButton>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
