import './App.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [name, setName] = useState('')
  const prevName = useRef('')
  const input = useRef(null);

  useEffect(() => {
    prevName.current = name;
  }, [name])

  return (
    <div className="App">
      <input type="text" ref={input} value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>And my name used to be {prevName.current}</div>
    </div>
  );
}

export default App;
