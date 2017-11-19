import React from 'react';
import './MiniPost.css';

const MiniPost = (props) => {
    return (
        <div>
            <div className='title'>{ props.title }</div>
            <div>{ props.img }</div>
            <div>{ props.text }</div>
            <div>{ props.date }</div>
        </div>
    )
};

export default MiniPost;
