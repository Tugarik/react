import "./App.css";
import { useState } from "react";

function App() {
  let sum = 0;
  let temp = 0;
  let operation;

  const [count, setCount] = useState("0");

  function reset() {
    setCount(0);
    console.log("x= ", count);
  }
  function decrement() {
    setCount(sum - count);
  }
  function increment() {
    operation = 
    setCount((sum += count));
    console.log(sum);
  }
  function changeTo1() {
    temp = 1;
    setCount(1);
  }
  function changeTo2() {
    temp = 1;
    setCount(2);
  }
  function changeTo3() {
    setCount(3);
  }
  function changeTo4() {
    setCount(4);
  }
  function changeTo0() {
    setCount(0);
  }
  function divide() {
    setCount(count / 10);
  }
  function opp() {
    setCount(-count);
  }
  function dot() {
    setCount(sum);
  }
  function equal() {
    setCount(sum);
  }

  const inputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <input value={count} id="screen" onChange={inputChange} type="text" />
      <br />
      <button onClick={reset}>C</button>
      <br />
      <button value="1" onClick={changeTo1}>
        1
      </button>
      <button onClick={changeTo2}>2</button>
      <button onClick={changeTo3}>3</button>
      <button onClick={increment}>+</button>
      <br />
      <button onClick={changeTo4}>4</button>
      <button onClick={changeTo2}>5</button>
      <button onClick={changeTo3}>6</button>
      <button onClick={decrement}>-</button>
      <br />
      <button onClick={changeTo1}>7</button>
      <button onClick={changeTo2}>8</button>
      <button onClick={changeTo3}>9</button>
      <button onClick={divide}>/</button>
      <br />
      <button onClick={opp}>-/+</button>
      <button onClick={changeTo0}>0</button>
      <button onClick={dot}>.</button>
      <button onClick={equal}>=</button>
      {/* <button onClick={multBy10}>*</button> */}
    </div>
  );
}

export default App;
