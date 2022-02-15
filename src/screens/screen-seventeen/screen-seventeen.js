import * as React from 'react';
import FooterSecondary from '../../shared/components/footer-secondary/footer-secondary';
import WelcomePageVariantTwo from '../../shared/pages/welcome-page-v2';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import { BrownTheme } from '../../shared/styles/themes/brown-theme';
import WelcomeImage from '../../assets/Property Management Assets/DSC00024@2x.png';
import SecondPage from './components/second-page';


function ScreenSeventeen() {
    const welcomePage = {
        titleOne: "",
        titleTwo: "Property Management",
        description: "Once you are in contact with us, one of our friendly property managers will talk you through the process of listing your property. We offer you an appraisal free of charge",
        image: WelcomeImage,
        showButtonGroup: false,
        buttonGroup : ['Rent a Room', 'Rent a House', 'List a Property'],
        menu: ['House Owners', 'Listings', 'Maintainance', 'Property Management'],
        menuTheme: DarkGreenTheme,
        headingTheme: BrownTheme,
    }
    return (
        <React.Fragment>
        <WelcomePageVariantTwo data = {welcomePage}/>
        <SecondPage/>
        <FooterSecondary/>
        </React.Fragment>
    );
}

export default ScreenSeventeen;