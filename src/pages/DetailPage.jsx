import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../store/savedSlice';
import axios from 'axios';
import { Paper, Typography, Button, Grid } from '@mui/material';
import NutritionRow from '../components/NutritionRow';
import ErrorMessage from '../components/ErrorMessage';

function DetailPage({ saved, dispatch }) {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const savedItems = useSelector((state) => state.saved);
  const dispatch = useDispatch();
  const isSaved = savedItems.some(item => item.barcode === barcode);

  useEffect(() => {
    // Fetch product data
    axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(response => {
        if (response.data.status === 1) {
          setProduct(response.data.product);
        } else {
          setError('Product not found');
        }
      })
      .catch(() => setError('Failed to fetch product'));
  }, [barcode]);

  const handleSave = () => {
    if (product) {
      dispatch(addItem(product));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(barcode));
  };

  if (error) return <ErrorMessage message={error} />;
  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Paper sx={{ p: 3, maxWidth: 800, mx: 'auto', mt: 2 }}>
      <Typography variant="h4" gutterBottom>{product.product_name}</Typography>
      <Button variant="contained" onClick={isSaved ? handleRemove : handleSave}>
        {isSaved ? 'Remove from Saved' : 'Save'}
      </Button>
      <Grid container spacing={2}>
        {product.nutriments && Object.entries(product.nutriments).map(([key, value]) => (
          <NutritionRow key={key} label={key} value={value} />
        ))}
      </Grid>
    </Paper>
  );
}

export default DetailPage;
