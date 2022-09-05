import React, { useState, useMemo} from 'react'

function MemoHook() {
  // everytime the state changes the whole component is re-rendered which means that it runs the slowFunction everytime, this slows down the application by some time which useMemo could fix
  const [ number, setNumber ] = useState(0)
  const [ dark, setDark ] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])
  // you put in the dependency array the values that change which in this case is the number

  const themeStyles = useMemo(() => {
    return {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }
  // now everytime dark gets updated, the object gets updated to but stays as the same object in memory
}, [dark])

  // pass in dark since that is the only variable that this object depends on

  // you can also use the useMemo hook for referential equality, since everytime this function runs, the themeStyles object will be declared again and will therefore be a different object in memory with every single render, to fix this you can wrap the object in a useMemo hook

  //----------------------------------------------------- 

  // now that we are using the useMemo hook the slowFunction should still take time to calculate but the theme now instantly changes as the function is memoized so as long as the dependecy doesnt change then it wont run and slow down the app
  // essentailly the code now only runs when it needs to and not when it doesnt have to

  return (
    <div>
      <p>useMemo hook</p>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prev => !prev)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num){
  for(let i = 0; i < 1000000000; i++){}
  return num * 2;
}

export default MemoHook;