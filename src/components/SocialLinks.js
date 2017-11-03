import React from 'react';

import './SocialLinks.css';
import FacebookSvg from './asserts/FacebookSvg';
import InstagramSvg from './asserts/InstagramSvg';

const SocialLinks = () => {
    return (
        <div className='social-links'>
            <FacebookSvg/>
            <InstagramSvg/>
        </div>
    );
}
export default SocialLinks;
