import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Lady Buddha (Linh Ung Pagoda)',
    img: 'LadyBuddha',
    text: 'Величественная красота',
    date: '10.07.2017'
}

const LadyBuddha = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default LadyBuddha;
