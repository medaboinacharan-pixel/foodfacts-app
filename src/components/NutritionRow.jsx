import React from 'react';
import { Grid, Typography } from '@mui/material';

// Reusable component for displaying nutrition facts
function NutritionRow({ label, value }) {
  return (
    <Grid item xs={6}>
      <Typography variant="body1"><strong>{label}:</strong> {value}</Typography>
    </Grid>
  );
}

export default NutritionRow;