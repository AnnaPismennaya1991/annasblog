import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Мото-хаос Ханоя',
    img: 'MotoHanoi',
    text: 'Самое непредсказуемое всегда - на перекрестках. Здесь каждый едет, как вздумается.',
    date: '29.06.2017'
}

const MotoHanoi = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default MotoHanoi;
