import React  from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Знакомство с Ханоем',
    img: 'Изображение',
    text: 'Какой-то текст о Ханое',
    date: 'Дата'
}

const ZnakomstvoHanoi = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default ZnakomstvoHanoi;
