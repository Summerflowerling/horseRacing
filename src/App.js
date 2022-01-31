import './App.css';
import { UserInfo } from './Component/UserInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import History from './Component/History';
import HorseInfo from './Component/HorseInfo';
import AmountCalculate from './Component/AmountCalculate';
import BetAmountConextProvider from './Context/BetAmountConext';
import RaceGameDisplay from './Component/RaceGameDisplay';

function App() {
  return (
    <>
      <BetAmountConextProvider>
        <Router>
          <Switch>
            <Route
              path='/'
              exact
              render={(props) => (
                <div>
                  <UserInfo />
                  <History />
                  <HorseInfo />
                  <AmountCalculate />
                </div>
              )}
            />

            <Route path='/race' component={RaceGameDisplay} />
          </Switch>
        </Router>
      </BetAmountConextProvider>
    </>
  );
}

export default App;
