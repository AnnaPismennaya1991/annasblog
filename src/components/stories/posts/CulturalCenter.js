import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Культурный центр ',
    img: 'CulturalCenter',
    text: 'Картинные галереи, кофейни, рестораны, атмосферная архитектура, дорогие магазины, роскошные гостиницы, озеро возвращённого меча, беседки, вечнозелёные парки, уличные художники...всё это Центр Ханоя.',
    date: '29.06.2017'
}

const CulturalCenter = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default CulturalCenter;