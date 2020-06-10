import React from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {Increment, Decrement} from "./actions/testCounter";

function App() {

  const counter = useSelector(state => state.CounterReducer);
  const loggin = useSelector(state => state.LoggedReducer);

  const changeLogin = !loggin;

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div> {counter} </div>
      <button onClick={ () => dispatch( Increment(100) )}>add</button>
      <button onClick={ () => dispatch( Decrement(100) )}>remove</button>
      <div> {changeLogin ? <div> Du är inloggad</div> : <div> Logga in </div>} </div>
    </div>
  );
}

export default App;
