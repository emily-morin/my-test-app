import logo from './logo.svg';
import './App.css';
import Fruits from './Fruits';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Howdy!
        </h1>
      </header>
      <div className="App-content">
        <Fruits />
      </div>
    </div>
  );
}

export default App;
