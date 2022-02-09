import { createTheme } from '@mui/material/styles';

export const LightGreenTheme = createTheme({
  palette: {
    primary: {
      main: '#96bc62',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});