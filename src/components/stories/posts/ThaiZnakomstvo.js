import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Таиланд. Первое знакомство',
    miniImg: 'ThaiZnakomstvo',
    miniText: 'Первое, что бросается в глаза - чистота, насыщенная бушующая зелень, раскидистые пальмы, высокие скалы и невероятной красоты алтари!',
    date: '01.08.2017'
}

const ThaiZnakomstvo = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default ThaiZnakomstvo;
