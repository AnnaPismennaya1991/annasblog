import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'The Precious Heritage Collection by Réhahn',
    img: 'CollectionByRehahn',
    text: 'Вдохновения пост',
    date: '11.07.2017'
}

const CollectionByRehahn = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default CollectionByRehahn;
