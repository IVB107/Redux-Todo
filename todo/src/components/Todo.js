import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, markCompleted } from '../actions';
import './Todo.css';

const Todo = props => {
    return (
        <div onClick={() => props.markCompleted(props.todo.id)} className={`todo-item ${props.todo.completed ? 'completed' : null}`}>
            <div>{props.name}</div>
            <div>
                <button 
                    className={`${props.todo.completed ? null : 'hidden'}`}
                    onClick={() => props.deleteTodo(props.todo.id)}
                >
                Delete
                </button>   
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {}
}

export default connect(
    mapStateToProps, 
    { 
        deleteTodo: deleteTodo, 
        markCompleted: markCompleted 
    }
)(Todo);