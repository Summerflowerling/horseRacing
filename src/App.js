import './App.css';
import { UserInfo } from './component/UserInfo';
import History from './component/History';
import HorseInfo from './component/HorseInfo';
import AmountCalculate from './component/AmountCalculate';

function App() {
  return (
    <div className='App'>
      <UserInfo />
      <History />
      <HorseInfo />
      <AmountCalculate />
    </div>
  );
}

export default App;
