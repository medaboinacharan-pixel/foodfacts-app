import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

function FoodCard({ product, onSave }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image_url || '/placeholder.jpg'}
        alt={product.product_name}
      />
      <CardContent>
        <Typography variant="h6">{product.product_name}</Typography>
        <Button variant="contained" onClick={() => onSave(product)}>Save</Button>
      </CardContent>
    </Card>
  );
}

export default FoodCard;