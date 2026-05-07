import { createTheme } from '@mui/material/styles';

// Custom Material UI theme with palette, typography, and border radius
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue primary
    },
    secondary: {
      main: '#dc004e', // Red secondary
    },
    background: {
      default: '#f5f5f5', // Light gray background
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners
  },
});

export default theme;