import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Уличная жизнь',
    miniImg: 'streetLife',
    miniText: 'Один из запоминающихся символов Вьетнама - торговки на улицах и рынках, в соломенных конусообразных шляпах.',
    date: '25.06.2017'
};

const StreetLife = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} /> }
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default StreetLife;
