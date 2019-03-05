import React from 'react';
import Todo from './Todo';

const List = props => {
    return (
        <div>
            {props.todoList.map(todo => {
                return (
                    <Todo 
                        key={todo.id}
                        name={todo.name} 
                        todo={todo}
                        delete={props.delete}
                        toggle={props.toggle}
                    />
                );
            })}
        </div>
    )
}

export default List;