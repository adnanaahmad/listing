import * as React from 'react';
import FooterPrimary from './../../shared/components/footer-primary/footer-primary'
import FirstPage from './components/first-page';
import SecondPage from './components/second-page';
import ThirdPage from './components/third-page';

function PageOne() {
  return (
    <React.Fragment>
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <FooterPrimary/>
    </React.Fragment>
  );
}

export default PageOne;