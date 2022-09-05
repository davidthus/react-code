import React, { useState} from 'react'
import MemoHook from './useMemo';
import './App.css';

function App() {
  // everytime the state changes the whole component is re-rendered which means that it runs the slowFunction everytime, this slows down the application by some time which useMemo could fix
  const [ number, setNumber ] = useState(0)
  const [ dark, setDark ] = useState(false);
  const doubleNumber = slowFunction(number);
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  return (
    <div className="App">
      <div className="left">
      <p>Normal component</p>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prev => !prev)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
      </div>
      <div className="right">
        <MemoHook />
      </div>
    </div>
  );
}

function slowFunction(num){
  for(let i = 0; i < 1000000000; i++){}
  return num * 2;
}

export default App;
