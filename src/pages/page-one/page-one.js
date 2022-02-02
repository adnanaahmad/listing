import * as React from 'react';
import MenuBar from './../../shared/components/menu-bar/menu-bar'
import FooterPrimary from './../../shared/components/footer-primary/footer-primary'

function PageOne() {
  return (
    <React.Fragment>
        <MenuBar/>
        <FooterPrimary/>
    </React.Fragment>
  );
}

export default PageOne;