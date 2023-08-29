import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: [],
}

function PostList(props) {
    const { posts } = props;
    return (
        <div>
            <ul className="post-list">
                {posts.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>

        </div>
    );
}

export default PostList;