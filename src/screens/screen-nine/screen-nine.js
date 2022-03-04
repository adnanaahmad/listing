import * as React from 'react';
import WelcomeImage from '../../assets/About Us Assets/DSC00380@2x.png';
import WelcomePageVariantTwo from '../../shared/pages/welcome-page-v2';
import FooterSecondary from '../../shared/components/footer-secondary/footer-secondary';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import { BrownTheme } from '../../shared/styles/themes/brown-theme';
import SecondPage from './components/second-page';
import ThirdPage from './components/third-page';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';

const theme = createTheme();

function ScreenNine() {
  const welcomePage = {
    titleOne: "",
    titleTwo: "About Us",
    description: "",
    image: WelcomeImage,
    showButtonGroup: false,
    menu: ['House Owners', 'Flatmates', 'Maintainance', 'Property Management'],
    menuTheme: DarkGreenTheme,
    headingTheme: BrownTheme
  }
  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
          <WelcomePageVariantTwo data = {welcomePage}/>
          <SecondPage/>
          <ThirdPage/>
          <FooterSecondary/>
        </ThemeProvider>
    </React.Fragment>
  );
}

export default ScreenNine;