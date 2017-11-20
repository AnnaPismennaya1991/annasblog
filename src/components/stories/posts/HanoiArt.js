import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Искусство Ханоя',
    img: 'HanoiArt',
    text: '',
    date: '29.06.2017'
}

const HanoiArt = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default HanoiArt;
