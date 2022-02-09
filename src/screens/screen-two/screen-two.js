import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import ListingProcessPage from '../../shared/pages/listing-process-page';
import SecondPage from './components/second-page';
import FourthPage from './components/fourth-page';

function ScreenTwo() {
    const welcomePage = {
        titleOne: "Home Owners",
        titleTwo: "Friendly Flats",
        description: "Once you are in contact with us, one of our friendly property managers will talk you through the process of listing your property. We offer you an appraisal a",
        image: "https://wallpaperaccess.com/full/2890506.jpg",
        showButtonGroup: false,
        menu: ['House Owners', 'Flatmates', 'Maintainance', 'Property Management']
    }
    return (
        <React.Fragment>
        <WelcomePageVariantOne data = {welcomePage}/>
        <SecondPage/>
        <ListingProcessPage/>
        <FourthPage/>
        <ClientsReviewPage/>
        <FooterPrimary/>
        </React.Fragment>
    );
}

export default ScreenTwo;