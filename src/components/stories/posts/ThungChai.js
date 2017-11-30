import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: '«Тхунг Чай»',
    img: 'ThungChai',
    text: 'Круглые лодки рыбаков - своеобразный символ Вьетнама.',
    date: '08.07.2017'
}

const ThungChai = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default ThungChai;
