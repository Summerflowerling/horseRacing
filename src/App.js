import './App.css';
import { UserInfo } from './Component/UserInfo';
import History from './Component/History';
import HorseInfo from './Component/HorseInfo';
import AmountCalculate from './Component/AmountCalculate';
import BetAmountConextProvider from './Context/BetAmountConext';

function App() {
  return (
    <BetAmountConextProvider>
      <UserInfo />
      <History />
      <HorseInfo />
      <AmountCalculate />
    </BetAmountConextProvider>
  );
}

export default App;
