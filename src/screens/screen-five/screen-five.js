import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import WelcomeImage from '../../assets/Index Assets/building.png';
import PolicyTermsPage from '../../shared/pages/policy-terms-page';
import { CardsContent } from '../../shared/core/constant';
import { BrownTheme } from '../../shared/styles/themes/brown-theme';
import { LightTheme } from '../../shared/styles/themes/light-theme';

function ScreenFive() {
  const welcomePage = {
    titleOne: "Privacy Policy",
    titleTwo: "Friendly Flats",
    description: "",
    image: WelcomeImage,
    showButtonGroup: false,
    menu: ['House Owners', 'Flatmates', 'Maintainance', 'Property Management'] 
  };
  const Cards = {
    cards: CardsContent,
    headingTheme: BrownTheme,
    paragraphTheme: LightTheme
  };
  return (
    <React.Fragment>
      <WelcomePageVariantOne data = {welcomePage}/>
      <PolicyTermsPage data = {Cards}/>
      <ClientsReviewPage/>
      <FooterPrimary/>
    </React.Fragment>
  );
}

export default ScreenFive;