import React, { useState, useReducer } from 'react';
import Todo from './Todo';


export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}


function reducer(todos, action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
      // returns all the other todos and the new one with the name property of aciton.payload
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        // checks if the id of the current todo item in the array is the todo which called this dispatch and if it is it inverts the complete property and returns the todo item
        if(todo.id === action.payload.id){
          return {...todo, complete: !todo.complete};
        }
        // or if it is not, then it just simply returns the todo item
        return todo;
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default: 
      return;
  }
}

function newTodo(name){
  // returns a new todo item
  return { id: Date.now(), name: name, complete: false}
}

function ReducerTodo() {

  const [ todos, dispatch ] = useReducer(reducer, [])
  const [ name, setName ] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    // common convention is to also pass in an object named payload where you pass in all the variables needed
    dispatch({type: ACTIONS.ADD_TODO, payload: { name: name }})
    setName("");
  }

  return (
    <>
    <p>useReducer hook todolist</p>
    <form onSubmit={handleSubmit} >
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </form>
    {
      todos.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))
    }
    </>
  );
}

export default ReducerTodo;