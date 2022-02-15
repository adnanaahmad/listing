import * as React from 'react';
import WelcomeImage from '../../assets/Maintenance Assets/DSC00024@2x.png';
import FooterSecondary from '../../shared/components/footer-secondary/footer-secondary';
import WelcomePageVariantTwo from '../../shared/pages/welcome-page-v2';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import { BrownTheme } from '../../shared/styles/themes/brown-theme';

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
    return (
        <React.Fragment>
            <WelcomePageVariantTwo data = {welcomePage} />
            <FooterSecondary/>
        </React.Fragment>
    );
}

export default ScreenTwenty;