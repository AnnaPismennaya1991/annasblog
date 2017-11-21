import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Таиланд. Первое знакомство',
    img: 'ThaiZnakomstvo',
    text: 'Первое, что бросается в глаза - чистота, насыщенная бушующая зелень, раскидистые пальмы, высокие скалы и невероятной красоты алтари!',
    date: '01.08.2017'
}

const ThaiZnakomstvo = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default ThaiZnakomstvo;
