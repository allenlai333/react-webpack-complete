import { PostsActionTypes } from '../constants/PostsActionTypes'

function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type) {
        case PostsActionTypes.SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
}

function postsBySubreddit(state = {}, action) {
    switch (action.type) {
        case PostsActionTypes.INVALIDATE_SUBREDDIT:
        case PostsActionTypes.RECEIVE_POSTS:
        case PostsActionTypes.REQUEST_POSTS:
            console.log('state:',state);
            console.log('action:',action);
            console.log(action.subreddit,state[action.subreddit]);
            let obj = Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
            })
            console.log(action.subreddit + ' obj:',obj);
            return obj;
        default:
            return state
    }
}

function posts(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case PostsActionTypes.INVALIDATE_SUBREDDIT:
            return { 
                ...state, 
                didInvalidate: true 
            };
        case PostsActionTypes.REQUEST_POSTS:
            return {
                ...state,
                isFetching : true,
                didInvalidate: false
            }
        case PostsActionTypes.RECEIVE_POSTS: //action 也可看成異步所帶回來的資料
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts, // 在Action Creator時會給他
                lastUpdated: action.recieveAt // 在Action Creator時會給他
            }
        default: 
            return state;
    }
}

/*
const postsReducer = combineReducers({
    selectedSubrredit,
    postsBySubrredit
});*/

export { selectedSubreddit, postsBySubreddit };