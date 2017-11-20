import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Суп «Pho» на завтрак ',
    img: 'SoupPho',
    text: 'Бульонных дел мастер',
    date: '29.06.2017'
}

const SoupPho = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default SoupPho;
