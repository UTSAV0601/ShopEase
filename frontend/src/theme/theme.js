import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f1f3f6',
    },
    primary: {
      main: '#1a73e8',
    },
    secondary: {
      main: '#ff9900',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
