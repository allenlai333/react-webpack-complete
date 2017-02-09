import React, { PropTypes } from 'react'

export default class Todo extends React.Component {
    render() {
        const { text, completed, onClickTodo } = this.props;

        return (
            <li
                onClick={onClickTodo}
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    cursor: completed ? 'default' : 'pointer'
                }}
            >
                {text}
            </li>
        );
    }
}

Todo.propTypes = {
    onClickTodo: PropTypes.func,
    completed: PropTypes.bool,
    text: PropTypes.string
}