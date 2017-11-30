import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Вокруг Лангкави',
    img: 'AboutLangkawi',
    text: 'Каждый из нас коллекционер воспоминаний.',
    date: '11.09.2017'
}

const AboutLangkawi = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default AboutLangkawi;
