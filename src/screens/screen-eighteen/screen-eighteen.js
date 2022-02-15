import * as React from 'react';
import FooterSecondary from '../../shared/components/footer-secondary/footer-secondary';
import WelcomePageVariantTwo from '../../shared/pages/welcome-page-v2';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import { BrownTheme } from '../../shared/styles/themes/brown-theme';
import WelcomeImage from '../../assets/Property Management Assets/DSC00024@2x.png';


function ScreenEighteen() {
    const welcomePage = {
        titleOne: "",
        titleTwo: "Listings",
        description: "",
        descriptionTwo: "Choose a shared flat or own place",
        image: WelcomeImage,
        showButtonGroup: true,
        buttonGroup : ['Room', 'House'],
        menu: ['House Owners', 'Listings', 'Maintainance', 'Property Management'],
        menuTheme: DarkGreenTheme,
        headingTheme: BrownTheme,
    }
    return (
        <React.Fragment>
        <WelcomePageVariantTwo data = {welcomePage}/>
        <FooterSecondary/>
        </React.Fragment>
    );
}

export default ScreenEighteen;