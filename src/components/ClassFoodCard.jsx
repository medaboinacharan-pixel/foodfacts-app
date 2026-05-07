import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

// Class component for learning purposes (equivalent to FoodCard)
class ClassFoodCard extends Component {
  componentDidMount() {
    console.log('ClassFoodCard mounted');
  }

  componentWillUnmount() {
    console.log('ClassFoodCard unmounted');
  }

  render() {
    const { product } = this.props;
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h6">{product.product_name}</Typography>
          {/* Add save button logic if needed */}
        </CardContent>
      </Card>
    );
  }
}

export default ClassFoodCard;