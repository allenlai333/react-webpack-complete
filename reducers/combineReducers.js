import { combineReducers } from 'redux'
import { visibilityFilter, todos } from './TodoReducer.js'
import { selectedSubreddit, postsBySubreddit } from './PostsReducer.js'

const AppReducers = combineReducers({
    visibilityFilter,
    todos,
    selectedSubreddit,
    postsBySubreddit
});

export default AppReducers;