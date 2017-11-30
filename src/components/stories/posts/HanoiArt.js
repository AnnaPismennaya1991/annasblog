import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Искусство Ханоя',
    img: 'HanoiArt',
    text: '',
    date: '29.06.2017'
}

const HanoiArt = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default HanoiArt;
