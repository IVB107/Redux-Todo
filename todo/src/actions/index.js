export const ADD_TODO = 'ADD_TODO';
export const MARK_COMPLETED = 'MARK_COMPLETED'
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_LIST = 'CLEAR_LIST';

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

export const markCompleted = id => {
    return {
        type: MARK_COMPLETED,
        payload: id
    }
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const clearList = () => {
    return {
        type: CLEAR_LIST,
        payload: []
    }
}