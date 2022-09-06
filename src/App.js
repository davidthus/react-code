import { useState } from 'react';
import './App.css';
import CallbackHook from './CallbackHook';
import List from './List';

function App() {
  const [ number, setNumber ] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    return [number, number + 1, number + 2];
  }

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }


  return (
    <div className="App">
      <div className="left" style={theme}>
        <p>Normal component</p>
      <input
       type="number"
      value={number}
      onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => {setDark(prev => !prev)}}>Change Theme</button>
      <List getItems={getItems} />
      <code>(Open the console)</code>
      </div>
        <CallbackHook />
    </div>
  );
}

export default App;
