import * as React from 'react';
import ListingDetailPage from '../../shared/pages/listing-detail-page';
import WelcomePageVariantThree from '../../shared/pages/welcome-page-v3';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import FooterSecondary from '../../shared/components/footer-secondary/footer-secondary';
import { BrownTheme } from '../../shared/styles/themes/brown-theme';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { menu } from '../../shared/utils/constants';

const theme = createTheme();

function ScreenSixteen() {
  const welcomePage = {
    theme: DarkGreenTheme,
    showButton: true,
    menu
  };
  const detailPage = {
    theme: BrownTheme,
    showButtonGroup: true
  };
  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
          <WelcomePageVariantThree data={welcomePage}/>
          <ListingDetailPage data={detailPage}/> 
          <FooterSecondary/> 
        </ThemeProvider>      
    </React.Fragment>
  );
}

export default ScreenSixteen;