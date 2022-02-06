import { createTheme } from '@mui/material/styles';

export const WhiteTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#36400F',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    contrastThreshold: 2,
    tonalOffset: 0.05,
  },
});