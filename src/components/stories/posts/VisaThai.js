import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'История о том, как мы получали визу в Таиланд',
    img: 'VisaThai',
    text: 'Перечень необходимых документов для получения визы по прилёту в Таиланд',
    date: '01.08.2017'
}

const VisaThai = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default VisaThai;
