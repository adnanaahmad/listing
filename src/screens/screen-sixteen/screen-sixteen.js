import * as React from 'react';
import ListingDetailPage from '../../shared/pages/listing-detail-page';
import WelcomePageVariantThree from '../../shared/pages/welcome-page-v3';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import FooterSecondary from '../../shared/components/footer-secondary/footer-secondary';

function ScreenSixteen() {
  const welcomePage = {
    theme: DarkGreenTheme,
    showButton: true
  };
  return (
    <React.Fragment>
        <WelcomePageVariantThree data={welcomePage}/>
        <ListingDetailPage/> 
        <FooterSecondary/>       
    </React.Fragment>
  );
}

export default ScreenSixteen;