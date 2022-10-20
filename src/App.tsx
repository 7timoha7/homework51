import React, {useState} from 'react';
import './App.css';
import Number from "./Number/Number";


function App() {

  const printNumbers = () => {

    const massNumbers = [];
    for (let i = 1; i <= 5; i++) {
      const randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
      massNumbers.push(randomNumber);
    }
    return massNumbers
  }

  const [number, setNumber] = useState([
    {number:0}
  ]);

  const changeNumber = ()=>{
    setNumber([
      {number: printNumbers()[0]}
    ]);
  };

  console.log(printNumbers());

  return (
    <div className="App">
      <div className="box">
        <button onClick={changeNumber}>Get numbers</button>
        <Number number={number[0].number}></Number>
      </div>

    </div>
  );
}

export default App;
