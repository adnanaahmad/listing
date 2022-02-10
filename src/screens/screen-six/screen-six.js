import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import WelcomeImage from '../../assets/All Listings Assets/flower.png';

function ScreenSix() {
  const welcomePage = {
    titleOne: "About Us",
    titleTwo: "Friendly Flats",
    description: "Auckland central has always seen a surge in the number of people trying to find a place. A place where they can feel safe, secure and have a friendly atmosphere. Hear our story.",
    image: WelcomeImage,
    showButtonGroup: false,
    menu: ['House Owners', 'Flatmates', 'Maintainance', 'Property Management'] 
  }
  return (
    <React.Fragment>
      <WelcomePageVariantOne data = {welcomePage}/>
      <ClientsReviewPage/>
      <FooterPrimary/>
    </React.Fragment>
  );
}

export default ScreenSix;