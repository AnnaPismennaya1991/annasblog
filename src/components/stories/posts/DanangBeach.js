import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Безупречный пляж Дананга',
    miniImg: 'DanangBeach',
    miniText: 'Прибрежная полоса из белого бархатистого песка, волны для активных видов спорта, вся необходимая инфраструктура - это ли не рай для туристов?!',
    date: '18.07.2017'
}

const DanangBeach = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default DanangBeach;
