import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { TodoActionCreator } from '../action/TodoActions.js'
import AddTodo from '../components/AddTodo.jsx' //若export有加default 就不需要加{ }
import TodoList from '../components/TodoList.jsx'
import Footer from '../components/Footer.jsx'
import { VisibilityFilters } from '../constants/ActionTypes.js'//若export是使用 export { VisibilityFilters, foo }; 就須使用 { }

class AppContainer extends React.Component {
    render() {
        // Injected by connect() call:
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return (
            <div>
                <AddTodo
                    onAddClick={(text) =>
                        dispatch(TodoActionCreator.addTodo(text))
                    }
                />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={(id) =>
                        dispatch(TodoActionCreator.toggleTodo(id))
                    }
                />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={(filter) =>
                        dispatch(TodoActionCreator.setVisibility(filter))
                    }
                />
            </div>
        );
    }
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

//第一個參數 mapStateToProps 的功能是把 Redux 的 state (store.getState()) 的結果 filter 出這個 Smart component 所需要的，
//然後用 prop 的方式 pass 給這個 component，
//因此我們在 connect 過後的 App component 裡就可以用 this.props.todos 來拿到 store.getState().todos
function mapStateToProps(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(AppContainer) 中；
export default connect(mapStateToProps)(AppContainer)