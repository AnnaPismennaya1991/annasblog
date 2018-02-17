import React from 'react';

import MiniTemplate from './miniTemplate/MiniTemplate';

const Story = (props) => {
    return (
        <div className='post'>
            { props.mini && <MiniTemplate {...props} /> }
            { !props.mini && <div>All story</div> }
        </div>
    );
};

export default Story;
