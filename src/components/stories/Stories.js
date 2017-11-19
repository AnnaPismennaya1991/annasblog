import React, { Component } from 'react';

import posts from './posts';
import './Stories.css';

class Stories extends Component {
    renderPosts = () => {
        return posts.map((Post, index) => {
            return (
                <div className='post' key={index}>
                    <Post mini />
                </div>
            )
        });
    }

    render() {
        return (
            <div className='stories'>
                { this.renderPosts() }
            </div>
        );
    }
}

export default Stories;
