import { PostsActionTypes } from '../constants/PostsActionTypes'
import fetch from 'isomorphic-fetch'

//Action Creator
const PostsActionCreator = {
    selectSubreddit: (subreddit) => {
        return {
            type: PostsActionTypes.SELECT_SUBREDDIT,
            subreddit
        }
    },

    invalidateSubreddit: (subreddit) => {
        return {
            type: PostsActionTypes.INVALIDATE_SUBREDDIT,
            subreddit
        }
    },

    requestPost: (subreddit) => {
        return {
            type: PostsActionTypes.REQUEST_POSTS,
            subreddit
        }
    },

    recievePost: (subreddit, json) => {
        return {
            type: PostsActionTypes.RECEIVE_POSTS,
            subreddit,
            posts: json.data.children.map((child) => child.data),
            recieveAt: Date.now()
        }
    },

    fetchPosts: (subreddit) => {
        return (dispatch) => {
            // Thunk middleware 知道如何处理函数。
            // 这里把 dispatch 方法通过参数的形式传给函数，
            // 以此来让它自己也能 dispatch action。
            dispatch(PostsActionCreator.requestPost(subreddit));

            return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
                    .then((response) => response.json())
                    .then((json) => {
                        console.log("json:",json);
                        dispatch(PostsActionCreator.recievePost(subreddit,json));
                    },(error) => console.log(error));//也可dispatch error
        }
    }

}

export { PostsActionCreator };