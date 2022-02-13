import { createTheme } from '@mui/material/styles';
export const LightTheme = createTheme({
    palette: {
        primary: {
          main:  '#000000',
          contrastText: '#ffffff',
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