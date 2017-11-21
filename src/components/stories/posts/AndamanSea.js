import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Чудеса Андаманского моря',
    img: 'AndamanSea',
    text: 'Во время сезона дождей море особенно штормит. Волны выбрасывают на берег морских звёздочек, кусочки кораллов, перламутровые ракушки и разноцветные камни.',
    date: '28.08.2017'
}

const AndamanSea = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default AndamanSea;
