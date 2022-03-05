import * as React from 'react';
import WelcomeImage from '../../assets/Privacy Policy Asset/liam-shaw-B89PCUuEGEU-unsplash@2x.png';
import PolicyTermsPage from '../../shared/pages/policy-terms-page';
import { CardsContent } from '../../shared/core/constant';
import FooterSecondary from '../../shared/components/footer-secondary/footer-secondary';
import WelcomePageVariantTwo from '../../shared/pages/welcome-page-v2';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import { BrownTheme } from '../../shared/styles/themes/brown-theme';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';

const theme = createTheme();
function ScreenNineteen() {
    const welcomePage = {
        titleOne: "",
        titleTwo: "Privacy Policy",
        description: "Friendly Flats takes your privacy seriously. Please read this Privacy Policy so you understand how we collect, store, and use information. This Privacy Policy describes the collection of technical and web browsing information through www.friendlyflats.co.nz",
        image: WelcomeImage,
        showButtonGroup: false,
        buttonGroup : ['Rent a Room', 'Rent a House', 'List a Property'],
        menu: ['House Owners', 'Listings', 'Maintainance', 'Property Management'],
        menuTheme: DarkGreenTheme,
        headingTheme: BrownTheme,
    }
    const Cards = {
        cards: CardsContent,
        headingTheme: DarkGreenTheme,
        paragraphTheme: DarkGreenTheme
    };
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <WelcomePageVariantTwo data = {welcomePage} />
                <PolicyTermsPage data = {Cards}/>
                <FooterSecondary/>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default ScreenNineteen;