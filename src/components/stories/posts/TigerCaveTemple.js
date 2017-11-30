import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Tiger Cave Temple',
    img: 'TigerCaveTemple',
    text: 'Как только въезжаешь на территорию храма Тигра, тут же окунаешься в атмосферу спокойствия, благодати, тишины и гармонии. Мысли уносятся ввысь, сердце наполняют свет и радость.',
    date: '17.08.2017'
}

const TigerCaveTemple = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default TigerCaveTemple;
