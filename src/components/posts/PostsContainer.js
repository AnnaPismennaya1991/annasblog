// контейнер - главная страница с мини-постами
import React, { Component } from 'react';

import posts from './constants';
import Post from './Post';
import './PostsContainer.css';

class PostsContainer extends Component {
    renderPosts = () => {
        return posts.map((post) => {
            return (
                <Post {...post} key={post.id} mini />
            );
        });
    }

    render() {
        return (
            <div className='posts-container'>
                { this.renderPosts() }
            </div>
        );
    }
}

export default PostsContainer;
