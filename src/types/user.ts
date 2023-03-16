export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export interface IUserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export interface IFetchUsersAction {
    type: typeof FETCH_USERS;
}

export interface IFetchUsersSuccessAction {
    type: typeof FETCH_USERS_SUCCESS;
    payload: any[];
}

export interface IFetchUsersErrorAction {
    type: typeof FETCH_USERS_ERROR;
    payload: string;
}

export type TUserAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction;