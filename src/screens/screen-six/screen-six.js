import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import WelcomeImage from '../../assets/All Listings Assets/flower.png';
import SecondPage from './components/second-page';
import ThirdPage from './components/third-page';
import FourthPage from './components/fourth-page';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { menu } from '../../shared/utils/constants';
import { Stack } from '@mui/material';

const theme = createTheme();

function ScreenSix() {
  const welcomePage = {
    titleOne: "About Us",
    titleTwo: "Friendly Flats",
    description: "Auckland central has always seen a surge in the number of people trying to find a place. A place where they can feel safe, secure and have a friendly atmosphere. Hear our story.",
    image: WelcomeImage,
    showButtonGroup: false,
    menu
  }
  return (
    <React.Fragment>
      <Stack spacing={20}>
        <ThemeProvider theme={theme}>
            <WelcomePageVariantOne data = {welcomePage}/>
            <SecondPage/>
            <ThirdPage/>
            <FourthPage/>
            <ClientsReviewPage/>
            <FooterPrimary/>
          </ThemeProvider>
      </Stack>
    </React.Fragment>
  );
}

export default ScreenSix;