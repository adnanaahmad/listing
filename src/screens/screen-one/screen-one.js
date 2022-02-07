import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary'
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import ListingProcessPage from '../../shared/pages/listing-process-page';
import FifthPage from './components/fifth-page';
import FourthPage from './components/fourth-page';
import SecondPage from './components/second-page';
import SixthPage from './components/sixth-page';

function PageOne() {
  return (
    <React.Fragment>
      <WelcomePageVariantOne/>
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

export default PageOne;