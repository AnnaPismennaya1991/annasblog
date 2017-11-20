import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Донги',
    img: 'Dongi',
    text: 'Полимерные деньги',
    date: '28.06.2017'
}

const Dongi = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default Dongi;
