import * as React from 'react';
import FooterSecondary from '../../shared/components/footer-secondary/footer-secondary';
import WelcomePageVariantTwo from '../../shared/pages/welcome-page-v2';
import ListingProcessPage from '../../shared/pages/listing-process-page';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import { BrownTheme } from '../../shared/styles/themes/brown-theme';
import WelcomeImage from '../../assets/Homeowners Assets/Mask Group 4@2x.png';
import imageOne from '../../assets/Homeowners Assets/DSC02202@2x.png';
import imageTwo from '../../assets/Homeowners Assets/jack-levick-4qWq1poO-Qw-unsplash@2x.png';
import CommitmentWorkPage from '../../shared/pages/commitment-work-page';
import PropertiesTcoPage from '../../shared/pages/properties-tco-page';

function ScreenFourteen() {
    const welcomePage = {
        titleOne: "",
        titleTwo: "Home Owners",
        description: "Once you are in contact with us, one of our friendly property managers will talk you through the process of listing your property. We offer you an appraisal free of charge",
        image: WelcomeImage,
        showButtonGroup: false,
        menu: ['House Owners', 'Flatmates', 'Maintainance', 'Property Management'],
        menuTheme: DarkGreenTheme,
        headingTheme: BrownTheme,
      }
    const commitmentWorkPage = {
        imageOne,
        imageTwo,
        theme: BrownTheme
    }
    const showHouse = false;
    return (
        <React.Fragment>
        <WelcomePageVariantTwo data = {welcomePage}/>
        <CommitmentWorkPage data = {commitmentWorkPage}/>
        <ListingProcessPage/>
        <PropertiesTcoPage data = {showHouse}/>
        <FooterSecondary/>
        </React.Fragment>
    );
}

export default ScreenFourteen;