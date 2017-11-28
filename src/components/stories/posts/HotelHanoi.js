import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Гостиница в Ханое',
    img: 'HotelHanoi',
    text: 'Дверь открывается и перед нами "их лучший номер"',
    date: '25.06.2017'
}

const HotelHanoi = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default HotelHanoi;
