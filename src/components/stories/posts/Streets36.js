import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Главное, не заблудиться в 36-ти улицах!',
    miniImg: 'Streets36',
    miniText: 'Больше всего во Вьетнаме мне понравилось то, что там всегда было куда идти.',
    date: '25.06.2017'
};

const Streets36 = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} /> }
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default Streets36;
