import React from 'react';
import { Link } from 'react-router-dom';

import './MiniPost.css';

import imgs from './asserts';

const MiniPost = (props) => {
    return (
        <div>
            <div className='title'>
                <Link to={props.img}>
                    { props.title }
                </Link>
            </div>
            <div className='imgs'>
                <img src={ imgs[props.img] }/>
            </div>
            <div className='text'>{ props.text }</div>
            <div className='date'>{ props.date }</div>
        </div>
    )
};

export default MiniPost;
