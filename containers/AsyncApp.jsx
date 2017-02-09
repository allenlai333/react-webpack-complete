import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { PostsActionCreator } from '../action/PostsActions.js'
import Picker from '../components/Picker.jsx'
import Posts from '../components/Posts.jsx'

class AsyncApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
        console.log('AsyncApp constructor');
    }

    componentDidMount() {
        console.log('AsyncApp componentDidMount');
        const { dispatch, selectedSubreddit } = this.props
        dispatch(PostsActionCreator.fetchPosts(selectedSubreddit))
    }

    componentWillReceiveProps(nextProps) {
        console.log('AsyncApp componentWillReceiveProps');
        //若下拉選單的值不同時，才fetchPosts
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = nextProps
            dispatch(PostsActionCreator.fetchPosts(selectedSubreddit))
        }
    }

    handleChange(nextSubreddit) {
        this.props.dispatch(PostsActionCreator.selectSubreddit(nextSubreddit))
    }

    handleRefreshClick(e) {
        e.preventDefault()

        const { dispatch, selectedSubreddit } = this.props
        dispatch(PostsActionCreator.invalidateSubreddit(selectedSubreddit))
        dispatch(PostsActionCreator.fetchPosts(selectedSubreddit))
    }

    render() {
        console.log('AsyncApp render');
        //在connect時，就會先去reducer跑一次
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
        return (
            <div>
                <Picker value={selectedSubreddit}
                    onChange={this.handleChange}
                    options={['reactjs', 'frontend']} />
                <p>
                    {lastUpdated &&
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                            {'   '}
                        </span>
                    }
                    {!isFetching &&
                        <a href='#'
                            onClick={this.handleRefreshClick}>
                            Refresh
                        </a>
                    }
                </p>
                {isFetching && posts.length === 0 &&
                    <h2>Loading...</h2>
                }
                {!isFetching && posts.length === 0 &&
                    <h2>Empty.</h2>
                }
                {posts.length > 0 &&
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <Posts posts={posts} />
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state;
    const { isFetching, lastUpdated, items: posts } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    };

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    };
}
export default connect(mapStateToProps)(AsyncApp)
