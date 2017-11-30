import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Таиланд. Провинция Краби',
    img: 'ThaiKrabi',
    text: 'Мы приехали в Таиланд в сезон дождей, когда сильные ливни "радовали" нас каждый час, солнце скрывалось за низкими грозовыми тучами, а море ежедневно штормило',
    date: '14.08.2017'
}

const ThaiKrabi = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default ThaiKrabi;
