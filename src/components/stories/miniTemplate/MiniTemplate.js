import React from 'react';
import { Link } from 'react-router-dom';

import './MiniTemplate.css';

import imgs from './asserts';
import DateSvg from './asserts/DateSvg';

const MiniTemplate = (props) => {
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
            <div className='date'><DateSvg /><span>{ props.date }</span></div>
        </div>
    )
};

export default MiniTemplate;
