import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Гостиница в Ханое',
    miniImg: 'HotelHanoi',
    miniText: 'Дверь открывается и перед нами "их лучший номер"',
    date: '25.06.2017'
}

const HotelHanoi = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default HotelHanoi;
