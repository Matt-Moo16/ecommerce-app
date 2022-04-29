import React from "react";
import { Grid } from '@mui/material'
import Product from './Product/Product'
import {MainDiv, SpaceAbove}  from "./styles";

const products = [
    {
        id: 1,
        name: 'Shoes',
        description: 'Running shoes',
        price: '$50'
    },
    {
        id: 2,
        name: 'Macbook',
        description: 'Apple macbook',
        price: '$2000'
    },

]

const Products = () => {

  return (
    <MainDiv>
        <SpaceAbove />
        <Grid container justifyContent='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </MainDiv>
  )
}

export default Products
