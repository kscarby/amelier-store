import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    sage: {
      main: '#B5C18E',
      contrastText: '#fff',
    },
    beige: {
      main: '#F7DCB9',
      contrastText: '#000',
    },
    tamara: {
      main: '#DEAC80',
      contrastText: '#000',
    },
    castain: {
      main: '#B99470',
      contrastText: '#000',
    },
  },
});
  
  export default theme;