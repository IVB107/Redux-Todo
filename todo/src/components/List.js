import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';


const List = props => {
    return (
        <div>
            {props.todoList.map(todo => {
                return (
                    <Todo 
                        todo={todo}
                        key={todo.id}
                        name={todo.name} 
                        completed={todo.completed}
                    />
                );
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
}

export default connect(mapStateToProps)(List);