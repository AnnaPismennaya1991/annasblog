import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Великий король',
    img: 'King',
    text: '"Его величество вознёсся на небеса. Его удивительная доброта навеки останется в сердцах всех тайцев"',
    date: '18.01.2018'
}

const King = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default King;
