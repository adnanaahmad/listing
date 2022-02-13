import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import ListingProcessPage from '../../shared/pages/listing-process-page';
import FourthPage from './components/fourth-page';
import CommitmentWorkPage from '../../shared/pages/commitment-work-page';
import imageTwo from '../../assets/Homeowners Assets/jack-levick-4qWq1poO-Qw-unsplash@2x.png';
import imageOne from '../../assets/All Listings Assets/laugh.jpg';


function ScreenTwo() {
    const welcomePage = {
        titleOne: "Home Owners",
        titleTwo: "Friendly Flats",
        description: "Once you are in contact with us, one of our friendly property managers will talk you through the process of listing your property. We offer you an appraisal a",
        image: "https://wallpaperaccess.com/full/2890506.jpg",
        showButtonGroup: false,
        menu: ['House Owners', 'Flatmates', 'Maintainance', 'Property Management']
    }
    const commitmentWorkPage = {
        imageOne,
        imageTwo,
        theme: null
    }
    return (
        <React.Fragment>
        <WelcomePageVariantOne data = {welcomePage}/>
        <CommitmentWorkPage data = {commitmentWorkPage}/>
        <ListingProcessPage/>
        <FourthPage/>
        <ClientsReviewPage/>
        <FooterPrimary/>
        </React.Fragment>
    );
}

export default ScreenTwo;