import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/savedSlice';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

function SavedPage() {
  const savedItems = useSelector((state) => state.saved);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {savedItems.map(item => (
        <Grid item xs={12} sm={6} md={4} key={item.barcode}>
          <Card>
            <CardContent>
              <Typography variant="h6">{item.product_name}</Typography>
              <Button variant="outlined" onClick={() => dispatch(removeItem(item.barcode))}>
                Remove
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default SavedPage;
