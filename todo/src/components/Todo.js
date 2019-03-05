import React from 'react';

const Todo = props => {
    return (
        <div className={`todo-item ${props.todo.completed ? 'completed' : null}`}>
            <div>{props.name}</div>
            <div>
                <input 
                    type="checkbox" 
                    onClick={() => props.toggle(props.todo.id)}
                />
                <button 
                    className={`${props.todo.completed ? null : 'hidden'}`}
                    onClick={() => props.delete(props.todo.id)}>Delete</button>   
            </div>
        </div>
    );
}

export default Todo;