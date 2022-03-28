import * as React from 'react';
import FooterSecondary from '../../shared/components/footer-secondary/footer-secondary';
import WelcomePageVariantTwo from '../../shared/pages/welcome-page-v2';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import { BrownTheme } from '../../shared/styles/themes/brown-theme';
import WelcomeImage from '../../assets/Property Management Assets/DSC00024@2x.png';
import SecondPage from './components/second-page';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { menu } from '../../shared/utils/constants';

const theme = createTheme();

function ScreenSeventeen() {
    const welcomePage = {
        titleOne: "",
        titleTwo: "Property Management",
        description: "Once you are in contact with us, one of our friendly property managers will talk you through the process of listing your property. We offer you an appraisal free of charge",
        image: WelcomeImage,
        showButtonGroup: false,
        buttonGroup : ['Rent a Room', 'Rent a House', 'List a Property'],
        menu,
        menuTheme: DarkGreenTheme,
        headingTheme: BrownTheme,
    }
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <WelcomePageVariantTwo data = {welcomePage}/>
                <SecondPage/>
                <FooterSecondary/>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default ScreenSeventeen;