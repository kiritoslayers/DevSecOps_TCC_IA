import { Shadows, createTheme } from '@mui/material';
import { shadows } from '@mui/system';

import { black, carbon, gray, pink, red, slate, teal } from '../colors';

export const defaultTheme = createTheme({
  shadows: Array(shadows.length).fill('none') as Shadows,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 820,
      lg: 1200,
      xl: 1536,
    },
  },
  backgroundColor: '#eef7f4',
  drawerColor: '#eef7f4',
  typography: {
    body1: {
      color: black[700],
      fontFamily: 'Lato',
      fontWeight: '400',
      fontSize: 16,
      letterSpacing: 0.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: '700',
      fontFamily: 'Titillium Web',
      letterSpacing: 1,
    },
    h1: {
      fontFamily: 'Titillium Web',
      fontWeight: '600',
      fontSize: 28,
      color: black[700],
    },
  },
  palette: {
    primary: {
      300: teal[300],
      main: teal.main,
      500: teal[500],
      600: teal[600],
      700: teal[700],
      800: teal[800],
      900: teal[900],
    },
    secondary: {
      300: pink[300],
      main: pink.main,
      500: pink[500],
      600: pink[600],
      700: pink[700],
      800: pink[800],
      900: pink[900],
    },
    tertiary: {
      300: slate[300],
      main: slate.main,
      500: slate[500],
      600: slate[600],
      700: slate[700],
      800: slate[800],
      900: slate[900],
    },
    error: {
      300: red[300],
      main: red.main,
      500: red[500],
      600: red[600],
      700: red[700],
      800: red[800],
      900: red[900],
    },
    neutral: {
      300: gray[300],
      main: gray.main,
      500: gray[500],
      600: gray[600],
      700: gray[700],
      800: gray[800],
      900: gray[900],
    },
    neutralVariant: {
      300: carbon[300],
      main: carbon.main,
      500: carbon[500],
      600: carbon[600],
      700: carbon[700],
      800: carbon[800],
      900: carbon[900],
    },
  },
});
