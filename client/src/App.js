import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  state = { todos: [] }

  componentDidMount() {
      fetch('/api/items')
        .then( res => res.json() )
        .then( todos => this.setState({ todos }) )
    }

    addItem = (name) => {
      let item = { name }
      fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(item)
      }).then( res => res.json() )
        .then( item => {
          const { todos } = this.state;
          this.setState({ todos: [...todos, item] })
        })
    }

    updateTodo = (id) => {
      fetch(`/api/items/${id}`, { method: 'PUT' })
        .then( res => res.json() )
        .then( item => {
          let todos = this.state.todos.map( t => {
            if (t.id === id)
              return item
            return t
          });

          this.setState({ todos });
        })
    }

    deleteTodo = (id) => {
      fetch(`/api/items/${id}`, { method: 'DELETE' })
        .then( () => {
          const { todos } = this.state;
          this.setState({ todos: todos.filter( t => t.id !== id ) })
        })
    }

  render() {
    return (
      <div className="container">
        <Form submit={this.addItem} />
        <List
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
