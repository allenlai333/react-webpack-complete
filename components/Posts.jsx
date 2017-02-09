import React, { PropTypes } from 'react'

export default class Posts extends React.Component {
    render() {
        const { posts } = this.props;
        return(
            <ul>
                {
                    posts.map((post, index) => {
                        return <li key={index}>{post.title}</li>
                    })
                }
            </ul>
        );
    }
} 

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}