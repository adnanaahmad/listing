import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary'
import FifthPage from './components/fifth-page';
import FirstPage from './components/first-page';
import FourthPage from './components/fourth-page';
import SecondPage from './components/second-page';
import SixthPage from './components/sixth-page';
import ThirdPage from './components/third-page';
import SeventhPage from './components/seventh-page';

function PageOne() {
  return (
    <React.Fragment>
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      <FifthPage/>
      <SixthPage/>
      <SeventhPage/>
      <FooterPrimary/>
    </React.Fragment>
  );
}

export default PageOne;