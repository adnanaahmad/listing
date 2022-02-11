import * as React from 'react';
import { DarkGreenTheme } from '../../shared/styles/themes/dark-green-theme';
import FirstPage from './components/first-page';

function ScreenTen() {
  const welcomePage = {
    menu: ['House Owners', 'Flatmates', 'Maintainance', 'Property Management'],
    menuTheme: DarkGreenTheme,
  }
  return (
    <React.Fragment>
      <FirstPage data = {welcomePage}/>
    </React.Fragment>
  );
}

export default ScreenTen;