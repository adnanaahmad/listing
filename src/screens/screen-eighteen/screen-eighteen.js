import * as React from 'react';
import FooterSecondary from '../../shared/components/footer-secondary/footer-secondary';
import WelcomePageVariantTwo from '../../shared/pages/welcome-page-v2';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import { BrownTheme } from '../../shared/styles/themes/brown-theme';
import WelcomeImage from '../../assets/All Listings Assets/DSC02341@2x.png';
import SecondSpacePage from '../../shared/pages/second-space-page';
import ListingProcessPage from '../../shared/pages/listing-process-page';
import LeftLeaf from '../../assets/Index Assets/Path 19@2x.png';
import iconOne from '../../assets/All Listings Assets/Group 3@2x.png';
import iconTwo from '../../assets/All Listings Assets/Group 60@2x.png';
import iconThree from '../../assets/All Listings Assets/Group 4@2x.png';
import FlatListingPage from '../../shared/pages/flat-listing-page';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { menu } from '../../shared/utils/constants';

const theme = createTheme();

function ScreenEighteen() {
    const welcomePage = {
        titleOne: "",
        titleTwo: "Listings",
        description: "",
        descriptionTwo: "Choose a shared flat or own place",
        image: WelcomeImage,
        showButtonGroup: true,
        buttonGroup : ['Room', 'House'],
        menu,
        menuTheme: DarkGreenTheme,
        headingTheme: BrownTheme,
    }
    const listingProcess = {
        title: 'Friendly Flat Process',
        titleTheme: 'brown',
        cards: [
            {title : 'MEET THE TEAM', icon: iconOne, text: 'Come and meet our team! Get to know your property manager before getting down to business'},
            {title : 'VIEWING', icon: iconTwo, text: 'Book in a viewing for the properties which suit you best. We will advise you on the features of each home for your convenience and answer any questions you may have.'},
            {title : 'APPLY NOW', icon: iconThree, text: `Apply for the home of your choosing quickly! You wouldn't want to miss out on the best opportunity.`}
        ],
        cardTheme: 'green',
        boxShadow: 'rgb(19 41 19 / 35%) 0px 4px 12px',
        leafImage: LeftLeaf,
        leafOpacity: '1'
    }
    const spacePage = {
        theme: BrownTheme,
        showButton: false,
        showBottomBar: false
    }
    const flatListing = {
        headingTheme: BrownTheme,
        menuBarTheme: DarkGreenTheme,
        filterTheme: DarkGreenTheme,
        menuBoxShadow: 'rgb(203 146 108 / 35%) 0px 4px 12px',
        cardTheme: BrownTheme,
    }
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <WelcomePageVariantTwo data = {welcomePage}/>
                <FlatListingPage data={flatListing}/>
                <ListingProcessPage data={listingProcess}/>
                <SecondSpacePage data={spacePage}/>
                <FooterSecondary/>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default ScreenEighteen;