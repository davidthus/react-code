import React, { useReducer } from 'react';

// sometimes, you may not like hard coded cases like increment and decrement so you can make an actions variable
// all caps because this is a global, non-changing variable
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}


// takes 2 params, current state and an action (what we pass into the dispatch function)
// this function returns the updated state
function reducer(state, action){
  // generally inside of your reducer you will have some form of a switch statement
  switch(action.type){
    case ACTIONS.INCREMENT:
      return { count: state.count + 1}
    case ACTIONS.DECREMENT:
      return { count: state.count - 1}
    default:
      return state;
  }
}

function ReducerCounter() {
  // useReducer takes 2 params, one function to change the state and the initial state
  // initial state is most likely an object as state in useReducer is much more complex
  const [ state, dispatch ] = useReducer(reducer, { count: 0})

  function increment() {
    // usually pass in a type
    dispatch({ type: ACTIONS.INCREMENT});
  }
  
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT});
  }

  return (
    <div>
      <p>useReducer hook counter</p>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default ReducerCounter;