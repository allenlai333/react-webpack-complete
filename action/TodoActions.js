import { TodoActionTypes } from '../constants/ActionTypes'

//Action Creator
const TodoActionCreator = {
    addTodo: (text) => {
        return {
            type: TodoActionTypes.ADD_TODO,
            text
        };
    },

    toggleTodo: (id) => {
        return {
            type: TodoActionTypes.TOGGLE_TODO,
            id
        };
    },

    setVisibility: (filter) => {
        return {
            type: TodoActionTypes.SET_VISIBILITY_FILTER,
            filter
        };
    },

    selectSubreddit: (subreddit) => {
        return {
            type: TodoActionTypes.SELECT_SUBREDDIT,
            subreddit
        }
    },

    invalidateSubreddit: (subreddit) => {
        return {
            type: TodoActionTypes.INVALIDATE_SUBREDDIT,
            subreddit
        }
    },

    requestPost: (subreddit) => {
        return {
            type: TodoActionTypes.REQUEST_POSTS,
            subreddit
        }
    },

    recievePost: (subreddit, json) => {
        return {
            type: TodoActionTypes.RECEIVE_POSTS,
            subreddit,
            posts: json.data.children.map((child) => child.data),
            recieveAt: Date.now()
        }
    }

}

export { TodoActionCreator };