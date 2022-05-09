import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import WelcomeImage from '../../assets/Index Assets/building.png';
import PolicyTermsPage from '../../shared/pages/policy-terms-page';
import { CardsContent } from '../../shared/core/constant';
import { BrownTheme } from '../../shared/styles/themes/brown-theme';
import { LightTheme } from '../../shared/styles/themes/light-theme';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { menu } from '../../shared/utils/constants';
import { Stack } from '@mui/material';

const theme = createTheme();
function ScreenFive() {
  const welcomePage = {
    titleOne: "Privacy Policy",
    titleTwo: "Friendly Flats",
    description: "",
    image: WelcomeImage,
    showButtonGroup: false,
    menu
  };
  const Cards = {
    cards: CardsContent,
    headingTheme: BrownTheme,
    paragraphTheme: LightTheme
  };
  return (
    <React.Fragment>
      <Stack spacing={10}>
        <ThemeProvider theme={theme}>
          <WelcomePageVariantOne data = {welcomePage}/>
          <PolicyTermsPage data = {Cards}/>
          <ClientsReviewPage/>
          <FooterPrimary/>
        </ThemeProvider>
      </Stack>
    </React.Fragment>
  );
}

export default ScreenFive;