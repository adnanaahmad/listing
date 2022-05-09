import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import ListingProcessPage from '../../shared/pages/listing-process-page';
import WelcomeImage from '../../assets/All Listings Assets/backpack.png';
import LeftLeaf from '../../assets/Index Assets/Path 19@2x.png';
import iconOne from '../../assets/All Listings Assets/Group 3@2x.png';
import iconTwo from '../../assets/All Listings Assets/Group 60@2x.png';
import iconThree from '../../assets/All Listings Assets/Group 4@2x.png';
import SecondSpacePage from '../../shared/pages/second-space-page';
import { LightTheme } from '../../shared/styles/themes/light-theme';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import FlatListingPage from '../../shared/pages/flat-listing-page';
import { GreenTheme } from '../../shared/styles/themes/green-theme';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { menu } from '../../shared/utils/constants';
import { Stack } from '@mui/material';

const theme = createTheme();
function ScreenThree() {
  const welcomePage = {
    titleOne: "Flatmates",
    titleTwo: "Friendly Flats",
    description: "Properties For Rent In New Zealand",
    image: WelcomeImage,
    showButtonGroup: false,
    menu
  }
  const listingProcess = {
    title: 'Our Listing Process',
    titleTheme: 'black',
    cards: [
        {title : 'MEET THE TEAM', icon: iconOne, text: 'Come and meet our team! Get to know your property manager before getting down to business'},
        {title : 'VIEWING', icon: iconTwo, text: 'Book in a viewing for the properties which suit you best. We will advise you on the features of each home for your convenience and answer any questions you may have.'},
        {title : 'APPLY NOW', icon: iconThree, text: `Apply for the home of your choosing quickly! You wouldn't want to miss out on the best opportunity.`}
    ],
    cardTheme: 'black',
    boxShadow: 'rgb(203 146 108 / 35%) 0px 4px 12px',
    leafImage: LeftLeaf,
    leafOpacity: '.1'
  }
  const spacePage = {
    theme: LightTheme,
    showButton: true,
    showBottomBar: true
  }
  const flatListing = {
    headingTheme: DarkGreenTheme,
    menuBarTheme: GreenTheme,
    filterTheme: LightTheme,
    menuBoxShadow: 'rgb(36 26 20 / 35%) 0px 4px 12px',
    cardTheme: LightTheme,
  }
  return (
    <React.Fragment>
      <Stack spacing={30}>
        <ThemeProvider theme={theme}>
          <WelcomePageVariantOne data = {welcomePage}/>
          <FlatListingPage data={flatListing}/>
          <ListingProcessPage data={listingProcess}/>
          <SecondSpacePage data={spacePage}/>
          <ClientsReviewPage/>
          <FooterPrimary/>
        </ThemeProvider>
      </Stack>
    </React.Fragment>
  );
}

export default ScreenThree;