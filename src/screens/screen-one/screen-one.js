import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import ListingProcessPage from '../../shared/pages/listing-process-page';
import FifthPage from './components/fifth-page';
import FourthPage from './components/fourth-page';
import SecondPage from './components/second-page';
import SixthPage from './components/sixth-page';

function ScreenOne() {
  const welcomePage = {
    titleOne: "New Zealand",
    titleTwo: "Friendly Flats",
    description: "Once you are in contact with us, one of our friendly property managers will talk you through the process of listing your property. We offer you an appraisal a",
    image: "https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  }
  return (
    <React.Fragment>
      <WelcomePageVariantOne data = {welcomePage}/>
      <SecondPage/>
      <ListingProcessPage/>
      <FourthPage/>
      <FifthPage/>
      <SixthPage/>
      <ClientsReviewPage/>
      <FooterPrimary/>
    </React.Fragment>
  );
}

export default ScreenOne;