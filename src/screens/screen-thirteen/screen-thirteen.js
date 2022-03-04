import * as React from 'react';
import FirstPage from './components/first-page';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';

const theme = createTheme();
function ScreenThirteen() {
  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
          <FirstPage/>
        </ThemeProvider>
    </React.Fragment>
  );
}

export default ScreenThirteen;