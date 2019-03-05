import { ADD_TODO, MARK_COMPLETED, DELETE_TODO } from '../actions';

const initialState = {
    inputText: '',
    todoList: []
}

export default (state = initialState, action) => {
    // console.log('In the reducer: ', action)
    switch (action.type) {
        case ADD_TODO:
        return {
            ...state,
            todoList: [...state.todoList, action.payload],
            inputText: ''
        }
        case MARK_COMPLETED:
        return {
            ...state,
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