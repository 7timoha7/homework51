import React, {useState} from 'react';
import './App.css';
import Number from "./Number/Number";

function App() {
  const massNumbers: number[] = [];
  const printNumbers = () => {

    do {
      const randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
      if (massNumbers[0] === undefined) {
        massNumbers.push(randomNumber);
      } else if (!massNumbers.includes(randomNumber)) {
        massNumbers.push(randomNumber);
      }

    } while (massNumbers.length < 4)

    massNumbers.sort((a, b)=> {
      return a - b;
    });

    return massNumbers
  }
  console.log(massNumbers);

  const [number, setNumber] = useState([
    {number: 0},
    {number: 0},
    {number: 0},
    {number: 0},
    {number: 0},
  ]);

  const changeNumber = () => {
    setNumber([
      {number: printNumbers()[0]},
      {number: printNumbers()[1]},
      {number: printNumbers()[2]},
      {number: printNumbers()[3]},
      {number: printNumbers()[4]},
    ]);
  };

  return (
    <div className="App">
      <div className="box">
        <button onClick={changeNumber} className="btn">Get numbers</button>
        <div className="ball-box">
          <Number number={number[0].number}></Number>
          <Number number={number[1].number}></Number>
          <Number number={number[2].number}></Number>
          <Number number={number[3].number}></Number>
          <Number number={number[4].number}></Number>
        </div>
      </div>
    </div>
  );
}

export default App;
