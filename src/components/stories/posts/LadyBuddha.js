import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Lady Buddha (Linh Ung Pagoda)',
    miniImg: 'LadyBuddha',
    miniText: 'Величественная красота',
    date: '10.07.2017'
}

const LadyBuddha = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default LadyBuddha;
