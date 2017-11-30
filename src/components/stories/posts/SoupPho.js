import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Суп «Pho» на завтрак ',
    img: 'SoupPho',
    text: 'Бульонных дел мастер',
    date: '29.06.2017'
}

const SoupPho = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default SoupPho;
