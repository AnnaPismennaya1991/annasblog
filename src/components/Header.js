import React from 'react';

import SocialLinks from './SocialLinks';
import HeaderSlider from './HeaderSlider';
import Menu from './Menu';

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
