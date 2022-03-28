import * as React from 'react';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import FirstPage from './components/first-page';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { menu } from '../../shared/utils/constants';

const theme = createTheme();

function ScreenTen() {
  const welcomePage = {
    menu,
    menuTheme: DarkGreenTheme,
  }
  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
          <FirstPage data = {welcomePage}/>
        </ThemeProvider>
    </React.Fragment>
  );
}

export default ScreenTen;