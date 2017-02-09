import React, { PropTypes } from 'react'
import Todo from './Todo.jsx'

export default class TodoList extends React.Component {
    render() {
        const { todos, onTodoClick } = this.props;
        return (
            <ul>
                {
                    todos.map((todo, index) => {
                        return (
                            <Todo
                                key={index}
                                text={todo.text}
                                completed={todo.completed}
                                onClickTodo={() => onTodoClick && onTodoClick(todo.id)}
                            />
                        );
                    })
                }
            </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            completed: PropTypes.bool,
            text: PropTypes.string
        })
    ).isRequired,
    onClickTodo: PropTypes.func
};