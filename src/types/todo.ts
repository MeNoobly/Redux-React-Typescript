export const FETCH_TODOS = "FETCH_TODOS";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";
export const SET_TODO_PAGE = "SET_TODO_PAGE";


export interface ITodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export interface IFetchTodoAction {
    type: typeof FETCH_TODOS;
}

export interface IFetchTodoSuccessAction {
    type: typeof FETCH_TODOS_SUCCESS;
    payload: any[];
}

export interface IFetchTodoErrorAction {
    type: typeof FETCH_TODOS_ERROR;
    payload: string;
}

export interface ISetTodoPage {
    type: typeof SET_TODO_PAGE;
    payload: number;
}

export type TTodoAction = IFetchTodoAction | IFetchTodoSuccessAction | IFetchTodoErrorAction | ISetTodoPage;


