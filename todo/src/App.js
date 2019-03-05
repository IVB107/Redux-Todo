import React, { Component } from 'react';
import List from './components/List';
import Form from './components/Form';
import { connect } from 'react-redux';
import { addTodo, markCompleted, deleteTodo } from './actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <List todoList={this.props.todoList} />
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
