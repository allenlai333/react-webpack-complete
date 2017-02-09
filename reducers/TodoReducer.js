import { TodoActionTypes, VisibilityFilters } from '../constants/ActionTypes';

const createTodo = (todos, text) => {
    const newTodos = [...todos];
    newTodos.push({
        id:  newTodos.length === 0 ? 0 : newTodos[newTodos.length - 1].id + 1,
        text,
        completed: false
    });
    return newTodos;
}

const toggleTodo = (todos, id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    if( index !== -1){
        newTodos[index].completed = !newTodos[index].completed;
    } 

    return newTodos;
}

function todos(state = [], action){
    switch(action.type){
        case TodoActionTypes.ADD_TODO:
            return createTodo(state, action.text);
        case TodoActionTypes.TOGGLE_TODO:
            return toggleTodo(state, action.id);
        default:
            return state;
    }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action){
    switch(action.type){
        case TodoActionTypes.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

/* 使用Redux的combineReducers function
function todoAppReducer(state = initialState, action){
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    };
}*/

/*
const todoAppReducer = combineReducers({
    visibilityFilter,
    todos
});*/

export { visibilityFilter, todos };