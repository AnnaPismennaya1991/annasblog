import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Уличная жизнь',
    img: 'streetLife',
    text: 'Один из запоминающихся символов Вьетнама - торговки на улицах и рынках, в соломенных конусообразных шляпах.',
    date: '26.06.2017'
};

const StreetLife = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} /> }
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default StreetLife;
