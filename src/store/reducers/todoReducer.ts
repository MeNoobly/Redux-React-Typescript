import { ITodoState, TTodoAction, FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR, SET_TODO_PAGE } from './../../types/todo';

const initialState: ITodoState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const todoReducer = (state = initialState, action: TTodoAction): ITodoState => {
    switch (action.type) {
        case FETCH_TODOS:
            return {...state, loading: true}
        case FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state;
    }
}