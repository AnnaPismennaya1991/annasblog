import React from 'react';

import LatestStores from './LatestStores';
import Stores from './Stores';
import AboutMe from './AboutMe';

const Content = () => {
    return (
        <div>
            <LatestStores/>
            <Stores/>
            <AboutMe/>
        </div>
    );
}

export default Content;
