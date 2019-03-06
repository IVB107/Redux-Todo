import React, { Component } from 'react';
import List from './components/List';
import Form from './components/Form';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Form />
        <List />
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

export default connect(mapStateToProps)(App);
