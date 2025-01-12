
import './App.css';
import BlindBox from './components/blind-box';
import ProgressBar from './components/progressbar';


function App() {
  return (
    <div className="App">
        <img src={'./images/logo.png'} className="App-logo" alt="logo" />
        <div className='blindbox'>
        <BlindBox /></div>
        <div className='progressbar'>
        <ProgressBar /></div>
    </div>
  );
}

export default App;
