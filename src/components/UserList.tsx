import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../store/hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';
import { useDispatch } from 'react-redux';

const UserList: FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchUsers(dispatch);
    }, [])

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user => 
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList;