import './App.css';
import { UserInfo } from './component/UserInfo';
import History from './component/History';
import HorseInfo from './component/HorseInfo';

function App() {
  return (
    <div className='App'>
      <UserInfo />
      <History />
      <HorseInfo />
    </div>
  );
}

export default App;
