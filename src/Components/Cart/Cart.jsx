import React from 'react'
import {Container, Typography, Button, Grid} from '@mui/material'
import { SpaceAbove } from "./styles";
import CardItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'
const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {  
    

    const EmptyCart = () => (
        <Typography variant='subtitle1'>
            You have no items in your shopping cart, 
            <Link style={{textDecoration: 'none', color: 'secondary'}} to='/'> start adding some</Link>!
        </Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                        <CardItem item={lineItem} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
            ))}
            </Grid>
            <div style={{display: 'flex',
                            marginTop: '10%',
                            width: '100%',
                            justifyContent: 'space-between',}}>
                <Typography>
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button
                        size='large'
                        type='button'
                        variant='contained'
                        color='secondary'
                        sx={{minWidth: '150px'}}
                        onClick={() => {handleEmptyCart()}}
                    >
                        Empty Cart
                    </Button>
                    <Button
                        component={Link}
                        to='/checkout'
                        size='large'
                        type='button'
                        variant='contained'
                        color='primary'
                        sx={{minWidth: '150px', marginLeft: '10px'}}
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    )

    if(!cart.line_items) return ('Loading...')

  return (
    <Container>
        <SpaceAbove />
        <Typography sx={{marginTop: '5%' }} variant='h3' gutterBottom>Your Shopping Cart</Typography>
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart
