import axios from 'axios';
import { Dispatch } from 'redux';
import { FETCH_USERS, TUserAction, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from '../../types/user';

export const fetchUsers = async (dispatch: Dispatch<TUserAction>) => {
    try {
        dispatch({type: FETCH_USERS});
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({type: FETCH_USERS_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({
            type: FETCH_USERS_ERROR, 
            payload: "Произошла ошибка при загрузке пользователей"
        })
    }
}