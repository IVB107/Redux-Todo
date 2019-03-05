import React, { Component } from 'react';
import List from './components/List';
import Form from './components/Form';
import { connect } from 'react-redux';
import { addTodo, markCompleted, deleteTodo } from './actions';
import './App.css';

class App extends Component {

  deleteTodo = (e, id) => {
    e.preventDefault();
    console.log('Delete todo clicked');
    this.props.deleteTodo(id)
  }

  render() {
    return (
      <div>
        <List deleteTodo={this.deleteTodo}/>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputText: state.inputText,
    todoList: state.todoList
  };
};

export default connect(mapStateToProps, { addTodo, markCompleted, deleteTodo })(App);
