import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import ListingProcessPage from '../../shared/pages/listing-process-page';
import WelcomeImage from '../../assets/Index Assets/Mask-Group-2.png';
import LeftLeaf from '../../assets/Property Management Assets/leaf.png';
import iconOne from '../../assets/Property Management Assets/one.png';
import iconTwo from '../../assets/Property Management Assets/two.png';
import iconThree from '../../assets/Property Management Assets/three.png';
import WorkPage from '../../shared/pages/work-page';
import {GreenTheme} from '../../shared/styles/themes/green-theme';
import {LightTheme} from '../../shared/styles/themes/light-theme';
import RecentlyListedPage from '../../shared/pages/recently-listed-page';
import AboutUsPage from '../../shared/pages/about-us-page';
import SpacePage from '../../shared/pages/space-page';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { menu } from '../../shared/utils/constants';
import { Stack } from '@mui/material';

const theme = createTheme();

function ScreenOne() {
  const welcomePage = {
    titleOne: "New Zealand",
    titleTwo: "Friendly Flats",
    description: "Once you are in contact with us, one of our friendly property managers will talk you through the process of listing your property. We offer you an appraisal a",
    image: WelcomeImage,
    showButtonGroup: true,
    menu
  }
  const listingProcess = {
    title: 'Our Listing Process',
    titleTheme: 'black',
    cards: [
        {title : 'MEET THE TEAM', icon: iconOne, text: 'Come and meet our team! Get to know your property manager before getting down to business'},
        {title : 'SHOWCASE', icon: iconTwo, text: 'We offer appraisals at no cost to you. Showcase your home to your dedicated property manager and they will get you set up with the perfect investment.'},
        {title : 'LIST PROPERTY', icon: iconThree, text: 'List your property on our site and we vow to find you the perfect tenants to suit your home. Leave it to us!'}
    ],
    cardTheme: 'black',
    boxShadow: 'rgb(203 146 108 / 35%) 0px 4px 12px',
    leafImage: LeftLeaf,
    leafOpacity: '1'
  }
  const work = {
    buttonTheme: GreenTheme,
    contentTheme: LightTheme
  }
  const recentlyListed = {
    theme: LightTheme
  }
  const space = {
    theme: LightTheme,
    buttonTheme: GreenTheme
  }
  return (
    <React.Fragment>
      <Stack spacing={20}>
        <ThemeProvider theme={theme}>
          <WelcomePageVariantOne data = {welcomePage}/>
          <WorkPage data={work}/>
          <ListingProcessPage data={listingProcess} />
          <RecentlyListedPage data = {recentlyListed}/>
          <SpacePage data={space}/>
          <AboutUsPage/>
          <ClientsReviewPage/>
          <FooterPrimary/>
        </ThemeProvider>
      </Stack>
    </React.Fragment>
  );
}

export default ScreenOne;