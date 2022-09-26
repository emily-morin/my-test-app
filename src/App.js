import './App.css';
import Fruits from './Fruits';

function App() {
  const getRandomFruit = () => {
    const fruits = [ '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍒', '🍓', '🥝', '🍅', '🥑' ];
    let randFruitIndex = Math.floor(Math.random() * fruits.length);
    return fruits[randFruitIndex];
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-floating-fruit-container">
          <p className="App-floating-fruit" alt="random fruit">{getRandomFruit()}</p>
          <p className="App-floating-fruit" alt="random fruit">{getRandomFruit()}</p>
          <p className="App-floating-fruit" alt="random fruit">{getRandomFruit()}</p>
          <p className="App-floating-fruit" alt="blueberries">🫐</p>
          <p className="App-floating-fruit" alt="random fruit">{getRandomFruit()}</p>
        </div>
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
