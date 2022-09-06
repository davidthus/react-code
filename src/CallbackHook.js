import React, { useState, useCallback } from 'react'
import List from './List';
import './App.css';

function CallbackHook() {
  const [ number, setNumber ] = useState(1);
  const [dark, setDark] = useState(false);

  // wrap the function in useCallback
  // the useCallback only recreates this function only when the number changes and not when the dark variable changes
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number])
  // the main difference between useMemo and useCallback is that useCallback actually returns the function whereas useMemo calls the function and returns whatever value it outputs

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }


  return (
    <div className="right" style={theme}>
      <p>Callback hook</p>
      <input
       type="number"
      value={number}
      onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => {setDark(prev => !prev)}}>Change Theme</button>
      <List getItems={getItems} />
    </div>
  )
}

export default CallbackHook;