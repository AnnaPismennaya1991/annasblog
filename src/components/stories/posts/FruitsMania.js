import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Фруктомания',
    img: 'FruitsMania',
    text: 'Фруктовый рай',
    date: '27.07.2017'
}

const FruitsMania = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default FruitsMania;