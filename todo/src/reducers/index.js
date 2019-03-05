import { ADD_TODO, MARK_COMPLETED, DELETE_TODO } from '../actions';

const initialState = {
    inputText: '',
    todoList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
                inputText: ''
            }
        case MARK_COMPLETED:
            const newList = state.todoList.map(todo => {
                return todo.id === action.payload
                    ? todo = {...todo, completed: !todo.completed}
                    : null
            })
            return {
                ...state,
                todoList: newList
            }
        case DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload)
            }
        default:
            return state;
    }
};