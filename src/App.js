import ScreenOne from './screens/screen-one/screen-one';
import ScreenTwo from './screens/screen-two/screen-two';
import ScreenThree from "./screens/screen-three/screen-three";
import ScreenFour from "./screens/screen-four/screen-four";
import ScreenFive from "./screens/screen-five/screen-five";
import FixedBottomNavigation from "./shared/components/bottom-navigation/bottom-navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/1">
            <ScreenOne/>
          </Route>
          <Route path="/2">
            <ScreenTwo/>
          </Route>
          <Route path="/3">
            <ScreenThree/>
          </Route>
          <Route path="/4">
            <ScreenFour/>
          </Route>
          <Route path="/5">
            <ScreenFive/>
          </Route>
        </Switch>
      </div>
      <FixedBottomNavigation/>
    </Router>
  );
}

export default App;
