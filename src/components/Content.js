import React from 'react';

import LatestStories from './LatestStories';
import Stories from './stories/Stories';

const Content = () => {
    return (
        <div>
            { false && <LatestStories/> }
            <Stories/>
        </div>
    );
}

export default Content;
