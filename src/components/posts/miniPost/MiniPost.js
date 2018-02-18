// мини-посты на главной странице
import React from 'react';
import { Link } from 'react-router-dom';

import './MiniPost.css';

import imgs from './asserts';
import DateSvg from './asserts/DateSvg';

const MiniPost = (props) => {
    return (
        <div className='mini-post'>
            <div className='title'>
                <Link to={props.miniImg}>
                    { props.title }
                </Link>
            </div>
            <div className='imgs'>
                <img src={ imgs[props.miniImg] } alt='minipost' />
            </div>
            <div className='text'>{ props.miniText }</div>
            <div className='date'><DateSvg /><span>{ props.date }</span></div>
        </div>
    )
};

export default MiniPost;
