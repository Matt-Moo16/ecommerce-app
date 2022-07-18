import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia} from '@mui/material'

const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
  return (
    <Card sx={{backgroundColor: '#DFE0DF'}}>
        <CardMedia image={item.image.url} alt={item.name} sx={{height: 260,}} />
        <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant='h4' sx={{fontFamily: 'Crimson Text'}}>{item.name}</Typography>
            <Typography variant='h5' sx={{fontFamily: 'Crimson Text'}}>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions sx={{justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center',}}>
                <Button type='button' size='small' onClick={() => {onUpdateCartQty(item.id, item.quantity - 1)}}>-</Button>
                <Typography sx={{fontFamily: 'Crimson Text'}}>{item.quantity}</Typography>
                <Button type='button' size='small' onClick={() => {onUpdateCartQty(item.id, item.quantity + 1)}}>+</Button>
            </div>
            <Button variant='outlined' type='button' color='secondary' sx={{fontFamily: 'Crimson Text'}} onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
        </CardActions>
    </Card>
  )
}

export default CartItem
