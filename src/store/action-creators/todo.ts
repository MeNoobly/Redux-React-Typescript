import { TTodoAction, FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR, SET_TODO_PAGE } from './../../types/todo';
import axios from 'axios';
import { Dispatch } from 'redux';

export const fetchTodos = async (dispatch: Dispatch<TTodoAction>, page = 1, limit = 10) => {
    try {
        dispatch({type: FETCH_TODOS});
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
            params: {_page: page, _limit: limit}
        });
        dispatch({type: FETCH_TODOS_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({
            type: FETCH_TODOS_ERROR, 
            payload: "Произошла ошибка при загрузке пользователей"
        })
    }
}

export const setTodoPage = (dispatch: Dispatch<TTodoAction>, page: number): void => {
    dispatch({type: SET_TODO_PAGE, payload: page})
}