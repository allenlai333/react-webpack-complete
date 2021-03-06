const TodoActionTypes = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
    SELECT_SUBREDDIT: 'SELECT_SUBREDDIT',
    INVALIDATE_SUBREDDIT: 'INVALIDATE_SUBREDDIT',
    REQUEST_POSTS: 'REQUEST_POSTS',
    RECEIVE_POSTS: 'RECEIVE_POSTS'
};

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export {
    TodoActionTypes,
    VisibilityFilters
};