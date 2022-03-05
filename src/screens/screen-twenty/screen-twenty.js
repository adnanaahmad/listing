import * as React from 'react';
import WelcomeImage from '../../assets/Maintenance Assets/DSC00024@2x.png';
import FooterSecondary from '../../shared/components/footer-secondary/footer-secondary';
import WelcomePageVariantTwo from '../../shared/pages/welcome-page-v2';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import { BrownTheme } from '../../shared/styles/themes/brown-theme';
import { CommitmentCardsTwo } from '../../shared/core/constant';
import CommitmentSatisfactionPage from '../../shared/pages/commitment-satisfaction-page';
import ThirdPage from './components/third-page';
import lightImage from '../../assets/Maintenance Assets/DSC02466@2x.png';
import MaintenancePage from '../../shared/pages/maintenance-page';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';

const theme = createTheme();
function ScreenTwenty() {
    const welcomePage = {
        titleOne: "",
        titleTwo: "Maintenance",
        description: "Once you are in contact with us, one of our friendly property managers will talk you through the process of listing your property. We offer you an appraisal free of charge",
        image: WelcomeImage,
        showButtonGroup: false,
        buttonGroup : ['Rent a Room', 'Rent a House', 'List a Property'],
        menu: ['House Owners', 'Listings', 'Maintainance', 'Property Management'],
        menuTheme: DarkGreenTheme,
        headingTheme: BrownTheme,
    }
    const commitment = {
        cards: CommitmentCardsTwo,
        theme: BrownTheme
    };
    const maintenance = {
        screen: 'twenty',
        listTheme: DarkGreenTheme,
        theme: BrownTheme,
        image: lightImage
    }
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <WelcomePageVariantTwo data = {welcomePage} />
                <CommitmentSatisfactionPage data={commitment} />
                <ThirdPage/>
                <MaintenancePage data={maintenance} />
                <FooterSecondary/>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default ScreenTwenty;