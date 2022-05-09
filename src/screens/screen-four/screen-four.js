import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import WelcomeImage from '../../assets/All Listings Assets/boat.png';
import ThirdPage from './components/third-page';
import { LightTheme } from '../../shared/styles/themes/light-theme';
import CommitmentSatisfactionPage from '../../shared/pages/commitment-satisfaction-page';
import { CommitmentCards } from '../../shared/core/constant';
import BulbImage from '../../assets/All Listings Assets/bulb.png';
import MaintenancePage from '../../shared/pages/maintenance-page';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { menu } from '../../shared/utils/constants';
import { Stack } from '@mui/material';

const theme = createTheme();
function ScreenFour() {
  const welcomePage = {
    titleOne: "Maintenance",
    titleTwo: "Friendly Flats",
    description: "",
    image: WelcomeImage,
    showButtonGroup: false,
    menu
  }

  const commitment = {
    cards: CommitmentCards,
    theme: LightTheme
  };
  const maintenance = {
    screen: 'four',
    listTheme: LightTheme,
    theme: LightTheme,
    image: BulbImage
  }
  return (
    <React.Fragment>
      <Stack spacing={30}>
        <ThemeProvider theme={theme}>
          <WelcomePageVariantOne data = {welcomePage}/>
          <CommitmentSatisfactionPage data={commitment} />
          <ThirdPage/>
          <MaintenancePage data={maintenance} />
          <ClientsReviewPage/>
          <FooterPrimary/>
        </ThemeProvider>
      </Stack>
    </React.Fragment>
  );
}

export default ScreenFour;