import React from 'react';
import Todos from '../todos/Todos';
import AddTodo from '../addTodo/AddTodo';
import './App.css';

const App = () => {

  return (
    <div className="app-container">
      <h1 id="title">Todos</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
