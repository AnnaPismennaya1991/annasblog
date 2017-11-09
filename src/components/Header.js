import React from 'react';

import SocialLinks from './SocialLinks';
import HeaderSlider from './headerSlider/HeaderSlider';
import Menu from './menu/Menu';

const Header = () => {
    return (
        <div>
            <SocialLinks/>
            <HeaderSlider/>
            <Menu/>
        </div>
    );
}

export default Header;
