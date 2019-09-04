import React, { Component } from 'react';
import Todos from './Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy milk'},
      {id: 2, content: 'do laudry'}
    ]
  }
  render() {
    return (
      <div className="app-container">
        <h1>Todos</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
