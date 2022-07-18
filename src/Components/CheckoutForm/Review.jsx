import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@mui/material'

const Review = ({ checkoutToken }) => {
  return (
    <>
        <Typography variant='h6' gutterBottom  sx={{fontFamily: 'Crimson Text'}}>Order Summary</Typography>
        <List disablePadding>
            {checkoutToken.live.line_items.map((product) => (
                <ListItem sx={{padding: '10px 0px'}} key={product.name}>
                    <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} primaryTypographyProps={{fontFamily: 'Crimson Text', fontSize: '18px'}} secondaryTypographyProps={{fontFamily: 'Crimson Text'}}/>
                    <Typography variant='body2' sx={{fontFamily: 'Crimson Text'}}>{product.line_total.formatted_with_symbol}</Typography>
                </ListItem>
            ))}
            <ListItem sx={{padding: '10px 0px'}}>
                <ListItemText primary='Total' primaryTypographyProps={{fontFamily: 'Crimson Text', fontSize: '16px'}}/>
                <Typography variant='subtitle1' sx={{fontWeight: 700, fontFamily: 'Crimson Text'}}>
                    {checkoutToken.live.subtotal.formatted_with_symbol}
                </Typography>
            </ListItem>
        </List>
    </>
  )
}

export default Review
