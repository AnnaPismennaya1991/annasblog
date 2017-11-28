import React from 'react';

import SocialLinks from './SocialLinks';
import HeaderSlider from './headerSlider/HeaderSlider';
import Menu from './menu/Menu';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <SocialLinks/>
            <HeaderSlider/>
            <Menu/>
        </div>
    );
}

export default Header;
