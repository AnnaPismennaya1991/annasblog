import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Субтропический ливень',
    img: 'SubtropicalRain',
    text: '"Анна, не забудьте зонт! Сегодня в ДаНанге дожди"',
    date: '13.07.2017'
}

const SubtropicalRain = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default SubtropicalRain;
