import { createTheme } from '@mui/material/styles';

export const DarkGreenTheme = createTheme({
  palette: {
    primary: {
      main: '#36400F',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});