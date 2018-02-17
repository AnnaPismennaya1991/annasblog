import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Мото-хаос Ханоя',
    miniImg: 'MotoHanoi',
    miniText: 'Самое непредсказуемое всегда - на перекрестках. Здесь каждый едет, как вздумается.',
    date: '29.06.2017'
}

const MotoHanoi = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default MotoHanoi;
