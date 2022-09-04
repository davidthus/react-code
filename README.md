# useReducer

In short, the useReducer hook is very useful and should be used for more complex state.

## Summary

 You send a dispatch function down to wherever you need it and pass in an action and a payload of  variables that you need to use, then this gets sent to the reducer function which takes care of all the logic, mostly using switch statements and making cases for the different actions it gets dispatched.