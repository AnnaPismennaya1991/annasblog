import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: '«Тхунг Чай»',
    img: 'ThungChai',
    text: 'Круглые лодки рыбаков - своеобразный символ Вьетнама.',
    date: '08.07.2017'
}

const ThungChai = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default ThungChai;
