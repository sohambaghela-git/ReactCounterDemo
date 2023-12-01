import { useState } from 'react';
import "./App.css"
function App() {

  const initialcount = 0
  const [ counter, setCounter ] = useState({);
  const [ color, setColor ] = useState("red");
  const [ button1, setButton1 ] = useState(true);
  const [ button2, setButton2 ] = useState(false);
  function incrementCounter(){
    if (counter >= 0 && counter <= 2 ){
      setColor("red");
      setButton1(false);
    }
    else if (counter <= 5 && counter > 2){
      setColor("yellow");
    }
    else if (counter < 10 && counter > 6){
      setColor("green");
    }
    if (counter == 9){
      setButton2(true);
    }
    setCounter(counter+1);
  }

  function decrementCounter(){
    if (counter < 4 && counter >= 0){
      setColor("red");
    }
    else if (counter < 7 && counter > 1){
      setColor("yellow");
    }
    else if (counter < 11 && counter > 6){
      setColor("green");
      setButton2(false)
    }
    if (counter == 0){
      setButton1(true);
    }
    setCounter(counter-1);
  }

  function resetCounter(){
    setCounter(0);
    setColor("red");
    setButton2(false);
    setButton1(true);
  }

  return (
    <div className="App">
      <div>
        <button disabled={button1} onClick={decrementCounter}>-</button>
        <div className={`$counter <=3 ? "white" : "yellow"`}>
          <p>{ counter }</p>
        </div>
        <button disabled={button2} onClick={incrementCounter}>+</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default App;
