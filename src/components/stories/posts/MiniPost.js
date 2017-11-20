import React from 'react';
import './MiniPost.css';

import imgs from './asserts';

const MiniPost = (props) => {
    console.log(props);
    console.log(imgs);
    console.log('_____________');

    return (
        <div>
            <div className='title'>{ props.title }</div>
            <div className='imgs'>
                <img src={ imgs[props.img] }/>
            </div>
            <div className='text'>{ props.text }</div>
            <div className='date'>{ props.date }</div>
        </div>
    )
};

export default MiniPost;
