import logo from './logo.svg';
import './App.css';
// import ReactPlayer from 'react-player';
import './style.css';
function App() {
  return (
    <div className="App">
     <div style={{border:"'solid' 1 'black'",maxWidth:'100vw'}}>
     <h1 className='title red'>AHMED Ahlem</h1> <br/>
      <img src={logo} width="400" alt='logo in src'/> <br/>
      <img src="logo192.png" alt='public logo'/>
      </div>
      <iframe src="https://www.youtube.com/embed/zTitoHKsyJg"  width="320" height="240" title >
      </iframe>
    </div>
  );
}

export default App;
