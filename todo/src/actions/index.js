export const ADD_TODO = 'ADD_TODO';
export const MARK_COMPLETED = 'MARK_COMPLETED'
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = inputText => {
    return {
        type: ADD_TODO,
        payload: {
            name: inputText,
            id: Date.now(),
            completed: false
        }
    }
}

export const markCompleted = () => {
    return {
        type: MARK_COMPLETED,
        payload: ''
    }
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}