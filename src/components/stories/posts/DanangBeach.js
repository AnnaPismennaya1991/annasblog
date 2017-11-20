import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Безупречный пляж Дананга',
    img: 'DanangBeach',
    text: 'Прибрежная полоса из белого бархатистого песка, волны для активных видов спорта, вся необходимая инфраструктура - это ли не рай для туристов?!',
    date: '18.07.2017'
}

const DanangBeach = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default DanangBeach;