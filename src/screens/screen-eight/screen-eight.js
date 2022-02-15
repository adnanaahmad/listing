import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import WelcomePageVariantOne from '../../shared/pages/welcome-page-v1';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import WelcomeImage from '../../assets/Index Assets/building.png';
import PolicyTermsPage from '../../shared/pages/policy-terms-page';
import { BrownTheme } from '../../shared/styles/themes/brown-theme';
import { LightTheme } from '../../shared/styles/themes/light-theme';

function ScreenEight() {
  const welcomePage = {
    titleOne: "Terms and Conditions",
    titleTwo: "Friendly Flats",
    description: "Friendly Flats takes your privacy seriously. Please read this Privacy Policy so you understand how we collect, store, and use information. This Privacy Policy describes the collection of technical and web browsing information through www.friendlyflats.co.nz",
    image: WelcomeImage,
    showButtonGroup: false,
    menu: ['House Owners', 'Flatmates', 'Maintainance', 'Property Management'] 
  };
  const CardsContent = 
    [
        {
            title: 'General',
            paragraph: [
                'Friendly Flats collects statistical information, this includes:',
                'Information that you provide us in the course of using the Friendly Flats service, such as your name, residential address, email address, and telephone number.',
                'We are required to collect personal information in order to:',
                'To provide services and products to you and undertake associated real estate processes and functions; To verify your identity and comply with legal obligations under the relevant anti-money laundering act. ',
                'To collect payment for your use of the services provided; To troubleshoot problems with the website and the services provided; To detect andyillegal use of the website and the services provided; To send you marketing notices, service updates, and promotional offers;'
            ]
        },
        {
            title: 'Misconduct',
            paragraph: [
                'You are entitled to request all personal information held by Friendly Flats at any given time. To do so you need to contact Friendly Flats at info@friendlyflats.co.nz. Where you are entitled to that information Friendly Flats will ensure it is provided in the manner you requested it. If it is not practical or possible to do so, Friendly Flats will provide the information in another suitable form such as via email or post.',
                'If Friendly Flats decides that it cannot provide you with certain information, it will outline the reasons for its decision in writing and the mechanisms available to complain about the refusal.',
            ]        
        },
        {
            title: 'Limited Liability',
            paragraph: [
                'You are entitled to request all personal information held by Friendly Flats at any given time. To do so you need to contact Friendly Flats at info@friendlyflats.co.nz. Where you are entitled to that information Friendly Flats will ensure it is provided in the manner you requested it. If it is not practical or possible to do so, Friendly Flats will provide the information in another suitable form such as via email or post.',
                'If Friendly Flats decides that it cannot provide you with certain information, it will outline the reasons for its decision in writing and the mechanisms available to complain about the refusal.',
            ]
        },
        {
            title: 'Bond',
            paragraph: [
                'We can store your information physically or electronically ourselves, or with others contracted to hold the information for us in New Zealand and overseas. We will act reasonably to ensure that your information is protected from unauthorised use or disclosure.',
                'Applications submitted to friendly flats, be that house-owner listings or tenant rental applications, will be stored in our system for the duration of our services with you, and longer if required.',
            ]        
        },
        {
            title: 'Payment',
            paragraph: [
                'If you have questions or complains about our privacy policy, please email us at info@friendlyflats.co.nz',
                'Private Policy is available on the Consol website. Friendly Flats retains the right to change this privacy policy from time to time. All updated versions of this policy will be posted and kept up to date on the website.',
            ]        
        },
    ];
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

export default ScreenEight;