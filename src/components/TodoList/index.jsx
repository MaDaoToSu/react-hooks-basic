import React from 'react';
import PropTypes from 'prop-types';

// variable receive to  father
TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func
};

// if variabale received don't have any value, set default 
TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}


function TodoList(props) {
    // passing props from father to child
    const { todos, onTodoClick } = props;

    // click to get obj todo
    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }
    return (
        <div>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => handleClick(todo)}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;