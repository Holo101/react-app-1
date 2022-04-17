import './App.css';
import MyeduInfo from './component/personal-info/personal';
import MypersonalInfo from './component/edu-info/eduinfo';
import Mypractical from './component/MypracticalExperience/Mypractical';

function App() {
  return (
    <div className="App">
     <MyeduInfo />
     <MypersonalInfo />
     <Mypractical />
    </div>
  );
}

export default App;
