import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, clearList } from '../actions';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    updateText = e => {
        this.setState({ inputValue: e.target.value });
    }

    createNewTodo = e => {
        e.preventDefault();
        console.log('Clicked to add a new todo');
        this.props.addTodo(this.state.inputValue);
        this.setState({ inputValue: '' })
    }

    clearList = e => {
        e.preventDefault();
        this.props.clearList();
    }

    render(){
        return (
            <div className="form-container">
                <form action="">
                    <input 
                        type="text" 
                        value={this.state.inputValue}
                        onChange={this.updateText}
                        placeholder="What do now?"
                    />
                    <button onClick={this.createNewTodo}>Add Item</button>
                    <button onClick={this.clearList}>Clear List</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { addTodo: addTodo, clearList: clearList })(Form);