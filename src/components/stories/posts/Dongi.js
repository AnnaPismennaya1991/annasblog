import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Донги',
    miniImg: 'Dongi',
    miniText: 'Полимерные деньги',
    date: '28.06.2017'
}

const Dongi = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default Dongi;
