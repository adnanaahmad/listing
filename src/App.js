import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ScreenOne from './screens/screen-one/screen-one';
import ScreenTwo from './screens/screen-two/screen-two';
import ScreenThree from "./screens/screen-three/screen-three";
import ScreenFour from "./screens/screen-four/screen-four";
import ScreenFive from "./screens/screen-five/screen-five";
import FixedBottomNavigation from "./shared/components/bottom-navigation/bottom-navigation";
import ScreenSix from './screens/screen-six/screen-six';
import ScreenSeven from "./screens/screen-seven/screen-seven";
import ScreenEight from "./screens/screen-eight/screen-eight";
import ScreenNine from "./screens/screen-nine/screen-nine";
import ScreenTen from "./screens/screen-ten/screen-ten";
import ScreenEleven from "./screens/screen-eleven/screen-eleven";
import ScreenTwelve from "./screens/screen-twelve/screen-twelve";
import ScreenThirteen from "./screens/screen-thirteen/screen-thirteen";
import ScreenFourteen from "./screens/screen-fourteen/screen-fourteen";
import ScreenFifteen from "./screens/screen-fifteen/screen-fifteen";
import ScreenSixteen from "./screens/screen-sixteen/screen-sixteen";
import ScreenSeventeen from "./screens/screen-seventeen/screen-seventeen";
import ScreenEighteen from "./screens/screen-eighteen/screen-eighteen";
import ScreenNineteen from "./screens/screen-nineteen/screen-nineteen";
import ScreenTwenty from "./screens/screen-twenty/screen-twenty";
import { screens as screen, showBottomNavigation } from "./shared/utils/constants";
function App() {
  const defaultRouteHanler = () => {
    return (
      <Redirect to={screen[1]}/>
    )
  }
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={'/'} render={defaultRouteHanler}/>
          <Route path={screen[1]}>
            <ScreenOne/>
          </Route>
          <Route path={screen[2]}>
            <ScreenTwo/>
          </Route>
          <Route path={screen[3]}>
            <ScreenThree/>
          </Route>
          <Route path={screen[4]}>
            <ScreenFour/>
          </Route>
          <Route path={screen[5]}>
            <ScreenFive/>
          </Route>
          <Route path={screen[6]}>
            <ScreenSix/>
          </Route>
          <Route path={screen[7]}>
            <ScreenSeven/>
          </Route>
          <Route path={screen[8]}>
            <ScreenEight/>
          </Route>
          <Route path={screen[9]}>
            <ScreenNine/>
          </Route>
          <Route path={screen[10]}>
            <ScreenTen/>
          </Route>
          <Route path={screen[11]}>
            <ScreenEleven/>
          </Route>
          <Route path={screen[12]}>
            <ScreenTwelve/>
          </Route>
          <Route path={screen[13]}>
            <ScreenThirteen/>
          </Route>
          <Route path={screen[14]}>
            <ScreenFourteen/>
          </Route>
          <Route path={screen[15]}>
            <ScreenFifteen/>
          </Route>
          <Route path={screen[16]}>
            <ScreenSixteen/>
          </Route>
          <Route path={screen[17]}>
            <ScreenSeventeen/>
          </Route>
          <Route path={screen[18]}>
            <ScreenEighteen/>
          </Route>
          <Route path={screen[19]}>
            <ScreenNineteen/>
          </Route>
          <Route path={screen[20]}>
            <ScreenTwenty/>
          </Route>
        </Switch>
      </div>
      {
        showBottomNavigation &&
        <FixedBottomNavigation/>
      }
    </Router>
  );
}

export default App;
