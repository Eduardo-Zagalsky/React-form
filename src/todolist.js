import { useState } from 'react';
import NewTodoForm from './newtodoform';
import Todo from './todo';

const TodoList = () => {
    const [todo, setTodo] = useState();
    const addItem = (todoItem) => {
        setTodo([...todo, { ...todoItem }])
    }
    return (
        <div>
            <NewTodoForm addItem={addItem} />
            <hr />
            {todo.map((item) => <Todo item={item} />)}
        </div>
    )
}

export default TodoList;