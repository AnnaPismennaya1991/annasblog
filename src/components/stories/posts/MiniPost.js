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
            {false && <div>
                <img src={ imgs[props.img] }/>
            </div>}
            <div>{ props.text }</div>
            <div>{ props.date }</div>
        </div>
    )
};

export default MiniPost;
