import React, { Component } from 'react';
import '../App.css';

import Form from './Form';
import List from './List';

class App extends Component {
  state = {
    inputValue: '',
    todos: []
  }
  handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value })
  }
  handleClick = (index) => {
    const todos = this.state.todos;
    todos.splice(index, 1)
    this.setState(todos)
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    const today = new Date()
    const createdOn = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    const newTodo = {
      value: this.state.inputValue === '' ? 'No Name' : this.state.inputValue,
      date: createdOn
    }
    const todos = this.state.todos
    todos.push(newTodo)
    this.setState({ todos, inputValue: '' })
  }

  render() {
    return (
      <div className="App">
        <Form handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue} />
        <List todos={this.state.todos}
          handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
