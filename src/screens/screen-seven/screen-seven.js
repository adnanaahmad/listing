import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import ListingDetailPage from '../../shared/pages/listing-detail-page';
import WelcomePageVariantThree from '../../shared/pages/welcome-page-v3';
import {BrownTheme} from '../../shared/styles/themes/brown-theme';

function ScreenSeven() {
  const welcomePage = {
    theme: BrownTheme,
    showButton: false
  };
  return (
    <React.Fragment>
        <WelcomePageVariantThree data={welcomePage}/>
        <ListingDetailPage/>
        <ClientsReviewPage/>
        <FooterPrimary/>
    </React.Fragment>
  );
}

export default ScreenSeven;