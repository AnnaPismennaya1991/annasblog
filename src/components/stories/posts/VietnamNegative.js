import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Обратная сторона Вьетнама',
    img: 'VietnamNegative',
    text: 'Я долго не решалась написать эту статью, но пришло время открыть завесу тайны и поделиться с Вами тем, о чем не напишут в путеводителях или отредактированных туристических журналах. Речь пойдёт о наболевшем - о "тёмной стороне" Вьетнама.',
    date: '28.07.2017'
}

const VietnamNegative = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default VietnamNegative;
