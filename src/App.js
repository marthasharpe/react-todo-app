import React, { Component } from 'react';
import Todos from './Todos';
import './App.css';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy milk'},
      {id: 2, content: 'do laudry'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="app-container">
        <h1 id="title">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
