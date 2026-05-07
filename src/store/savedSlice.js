import { createSlice } from '@reduxjs/toolkit';

// Slice for managing saved food items
const savedSlice = createSlice({
  name: 'saved',
  initialState: [],
  reducers: {
    // Add an item if it doesn't already exist (prevent duplicates)
    addItem: (state, action) => {
      const item = action.payload;
      if (!state.some(savedItem => savedItem.barcode === item.barcode)) {
        state.push(item);
      }
    },
    // Remove an item by barcode
    removeItem: (state, action) => {
      return state.filter(item => item.barcode !== action.payload);
    },
  },
});

// Export actions for use in components
export const { addItem, removeItem } = savedSlice.actions;

// Export reducer for store configuration
export default savedSlice.reducer;