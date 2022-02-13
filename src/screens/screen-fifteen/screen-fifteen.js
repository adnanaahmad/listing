import * as React from 'react';
import FooterSecondary from '../../shared/components/footer-secondary/footer-secondary';
import WelcomePageVariantTwo from '../../shared/pages/welcome-page-v2';
import ListingProcessPage from '../../shared/pages/listing-process-page';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import { BrownTheme } from '../../shared/styles/themes/brown-theme';
import WelcomeImage from '../../assets/Index Assets/Mask-Group-2.png';
import LeftLeaf from '../../assets/Index Assets/Path 19@2x.png';
import iconOne from '../../assets/Index Assets/Group 3@2x.png';
import iconTwo from '../../assets/Index Assets/Group 5@2x.png';
import iconThree from '../../assets/Index Assets/Group 4@2x.png';
import SeventhPage from './components/seventh-page';
import EighthPage from './components/eighth-page';


function ScreenFifteen() {
    const welcomePage = {
        titleOne: "In a Friendly Flat, you'll find;",
        titleTwo: "Comfort",
        description: "Once you are in contact with us, one of our friendly property managers will talk you through the process of listing your property. We offer you an appraisal free of charge",
        image: WelcomeImage,
        showButtonGroup: true,
        buttonGroup : ['Rent a Room', 'Rent a House', 'List a Property'],
        menu: ['House Owners', 'Listings', 'Maintainance', 'Property Management'],
        menuTheme: DarkGreenTheme,
        headingTheme: BrownTheme,
      }
    const listingProcess = {
        title: 'Our Listing Process',
        titleTheme: 'brown',
        cards: [
            {title : 'MEET THE TEAM', icon: iconOne, text: 'Come and meet our team! Get to know your property manager before getting down to business'},
            {title : 'FREE APPRAISAL', icon: iconTwo, text: 'Call us for a free appraisal. We value your property as our own, reflected in the ongoing rental income and return on your investment.'},
            {title : 'LIST PROPERTY', icon: iconThree, text: 'List your property on our site and we vow to find you the perfect tenants to suit your home. Leave it to us!'}
        ],
        cardTheme: 'green',
        boxShadow: 'rgb(203 146 108 / 35%) 0px 4px 12px',
        leafImage: LeftLeaf,
        leafOpacity: '1'
    }
    return (
        <React.Fragment>
        <WelcomePageVariantTwo data = {welcomePage}/>
        <ListingProcessPage data={listingProcess}/>
        <SeventhPage/>
        <EighthPage/>
        <FooterSecondary/>
        </React.Fragment>
    );
}

export default ScreenFifteen;