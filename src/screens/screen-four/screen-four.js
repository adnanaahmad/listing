import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import WelcomeImage from '../../assets/All Listings Assets/backpack.jpg'
import SecondPage from './components/second-page';

function ScreenFour() {
  const welcomePage = {
    titleOne: "Maintenance",
    titleTwo: "Friendly Flats",
    description: "",
    image: WelcomeImage,
    showButtonGroup: false,
    menu: ['House Owners', 'Flatmates', 'Maintainance', 'Property Management'] 
  }
  return (
    <React.Fragment>
      <WelcomePageVariantOne data = {welcomePage}/>
      <SecondPage/>
      <ClientsReviewPage/>
      <FooterPrimary/>
    </React.Fragment>
  );
}

export default ScreenFour;