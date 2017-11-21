import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Творческих дел мастер',
    img: 'BaliArt',
    text: 'Бесформенная каменная глыба в талантливых руках мастера превращается в прекрасную скульптуру.',
    date: '05.11.2017'
}

const BaliArt = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default BaliArt;
