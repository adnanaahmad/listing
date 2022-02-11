import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import FirstPage from './components/first-page';

function ScreenSeven() {
  return (
    <React.Fragment>
        <FirstPage/>
        <ClientsReviewPage/>
        <FooterPrimary/>
    </React.Fragment>
  );
}

export default ScreenSeven;