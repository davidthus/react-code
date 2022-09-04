import React, { useState, useReducer } from 'react';
import ReducerCounter from './ReducerCounter.js';
import ReducerTodo from './ReducerTodo.js';
import './App.css';

function App() {
  const [ count, setCount ] = useState(0);

  function increment() {
    setCount(count => count + 1);
  }

  function decrement() {
    setCount(count => count - 1);
  }

  return (
    <div className="App">
      <div className="left">
      <div>
        <p>useState hook counter</p>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    <hr />
      <ReducerCounter />
      </div>
      <div className="right">
        <ReducerTodo />
      </div>
    </div>
  );
}

export default App;
