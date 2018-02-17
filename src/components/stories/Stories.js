import React, { Component } from 'react';

import posts from './posts';
import Story from './Story';
import './Stories.css';

class Stories extends Component {
    renderStories = () => {
        return posts.map((post) => {
            return (
                <Story {...post} key={post.id} mini />
            );
        });
    }

    render() {
        return (
            <div className='stories'>
                { this.renderStories() }
            </div>
        );
    }
}

export default Stories;
