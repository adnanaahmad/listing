import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import ListingDetailPage from '../../shared/pages/listing-detail-page';
import WelcomePageVariantThree from '../../shared/pages/welcome-page-v3';
import {BrownTheme} from '../../shared/styles/themes/brown-theme';
import {LightTheme} from '../../shared/styles/themes/light-theme';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { menu } from '../../shared/utils/constants';

const theme = createTheme();

function ScreenSeven() {
  const welcomePage = {
    theme: BrownTheme,
    showButton: false,
    menu
  };
  const detailPage = {
    theme: LightTheme,
    showButtonGroup: false
  };
  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
          <WelcomePageVariantThree data={welcomePage}/>
          <ListingDetailPage data={detailPage}/>
          <ClientsReviewPage/>
          <FooterPrimary/>
        </ThemeProvider>
    </React.Fragment>
  );
}

export default ScreenSeven;