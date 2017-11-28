import React, { Component } from 'react';

import posts from './posts';
import './Stories.css';

class Stories extends Component {
    renderPosts = () => {
        return posts.map((post, index) => {
            const Component = post.component;

            return (
                <div className='post' key={index}>
                    <Component mini />
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
