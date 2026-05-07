import { configureStore } from '@reduxjs/toolkit';
import savedReducer from './savedSlice';

// Load saved items from localStorage on startup
const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem('savedItems');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return [];
  }
};

// Save items to localStorage whenever state changes
const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('savedItems', JSON.stringify(state.saved));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

// Configure the Redux store
const store = configureStore({
  reducer: {
    saved: savedReducer,
  },
  preloadedState: {
    saved: loadFromLocalStorage(),
  },
});

// Subscribe to store changes to persist to localStorage
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;