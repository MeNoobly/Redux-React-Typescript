import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos, setTodoPage } from '../store/action-creators/todo';
import { useTypedSelector } from '../store/hooks/useTypedSelector';

const TodoList: FC = () => {
    const {page, error, limit, loading, todos} = useTypedSelector(state => state.todo);
    const dispatch = useDispatch();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(dispatch, page, limit);
    }, [page]) 

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
           {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
           )}
           <div style={{display: "flex"}}>
                {pages.map(p => 
                    <div
                        onClick={() => setTodoPage(dispatch, p)}
                        style={{border:p === page ? "2px solid green" : "1px solid gray", padding: 10}}
                    >
                        {p}
                    </div>
                )}
           </div> 
        </div>
    );
};

export default TodoList;