import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import ListingProcessPage from '../../shared/pages/listing-process-page';
import CommitmentWorkPage from '../../shared/pages/commitment-work-page';
import imageTwo from '../../assets/Homeowners Assets/jack-levick-4qWq1poO-Qw-unsplash@2x.png';
import imageOne from '../../assets/All Listings Assets/laugh.jpg';
import PropertiesTcoPage from '../../shared/pages/properties-tco-page';
import LeftLeaf from '../../assets/Property Management Assets/leaf.png';
import iconOne from '../../assets/Property Management Assets/one.png';
import iconTwo from '../../assets/Property Management Assets/two.png';
import iconThree from '../../assets/Property Management Assets/three.png';

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
    const showHouse = true;
    const listingProcess = {
        title: 'Our Listing Process',
        titleTheme: 'black',
        cards: [
            {title : 'MEET THE TEAM', icon: iconOne, text: 'Come and meet our team! Get to know your property manager before getting down to business'},
            {title : 'SHOWCASE', icon: iconTwo, text: 'We offer appraisals at no cost to you. Showcase your home to your dedicated property manager and they will get you set up with the perfect investment.'},
            {title : 'LIST PROPERTY', icon: iconThree, text: 'List your property on our site and we vow to find you the perfect tenants to suit your home. Leave it to us!'}
        ],
        cardTheme: 'black',
        boxShadow: 'rgb(203 146 108 / 35%) 0px 4px 12px',
        leafImage: LeftLeaf,
        leafOpacity: '1'
    }
    return (
        <React.Fragment>
        <WelcomePageVariantOne data = {welcomePage}/>
        <CommitmentWorkPage data = {commitmentWorkPage}/>
        <ListingProcessPage data={listingProcess} />
        <PropertiesTcoPage data = {showHouse}/>
        <ClientsReviewPage/>
        <FooterPrimary/>
        </React.Fragment>
    );
}

export default ScreenTwo;