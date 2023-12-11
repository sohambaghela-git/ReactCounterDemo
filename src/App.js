import { useState } from 'react';
import "./App.css"
function App() {
  const [ counter, setCounter ] = useState(0);
  function incrementCounter(){
    setCounter(counter+1);
  }

  function decrementCounter(){
    setCounter(counter-1);
  }

  const  changeColor = () => {
    if (counter >= 0 && counter <= 2) {
      return 'red';
    } else if (counter >= 3 && counter <= 6) {
      return 'yellow';
    } else if (counter >= 7 && counter <= 10) {
      return 'green';
    }
  };


  function resetCounter(){
    setCounter(0);
  }

  return (
    <div className="App" style={{ backgroundColor: changeColor()}}>
      <div >
        <button disabled={counter == 0} onClick={decrementCounter}>-</button>
        <div>
          <p>{ counter }</p>
        </div>
        <button disabled={counter == 10} onClick={incrementCounter}>+</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default App;
