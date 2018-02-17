import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Фруктомания',
    miniImg: 'FruitsMania',
    miniText: 'Фруктовый рай',
    date: '27.07.2017'
}

const FruitsMania = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default FruitsMania;
