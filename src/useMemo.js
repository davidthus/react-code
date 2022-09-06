import React, { useMemo, useState } from "react";

function MemoHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  // you put in the dependency array the values that change which in this case is the number

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
    // the reference to this object changes only when the dependency changes instead of every render
  }, [dark]);

  // Normally, points to a new memory space everytime the function is called, or component is re-rendered
  // This leads to any hooks that are watching for this change to rerun, even if the values never changed
  // To fix this, return the object from the useMemo function which will ensure that it always has the same memory space until it is actually changed.

  //-----------------------------------------------------

  // now that we are using the useMemo hook the slowFunction should still take time to calculate but the theme now instantly changes as the function is memoized so as long as the dependecy doesnt change then it wont run and slow down the app
  // essentially the code now only runs when it needs to and not when it doesnt have to

  return (
    <div>
      <p>useMemo hook</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default MemoHook;
