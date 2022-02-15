import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import WelcomeImage from '../../assets/All Listings Assets/boat.png';
import ThirdPage from './components/third-page';
import FourthPage from './components/fourth-page';
import { LightTheme } from '../../shared/styles/themes/light-theme';
import CommitmentSatisfactionPage from '../../shared/pages/commitment-satisfaction-page';
import { CommitmentCards } from '../../shared/core/constant';

function ScreenFour() {
  const welcomePage = {
    titleOne: "Maintenance",
    titleTwo: "Friendly Flats",
    description: "",
    image: WelcomeImage,
    showButtonGroup: false,
    menu: ['House Owners', 'Flatmates', 'Maintainance', 'Property Management'] 
  }

  const commitment = {
    cards: CommitmentCards,
    theme: LightTheme
  };
  return (
    <React.Fragment>
      <WelcomePageVariantOne data = {welcomePage}/>
      <CommitmentSatisfactionPage data={commitment} />
      <ThirdPage/>
      <FourthPage/>
      <ClientsReviewPage/>
      <FooterPrimary/>
    </React.Fragment>
  );
}

export default ScreenFour;