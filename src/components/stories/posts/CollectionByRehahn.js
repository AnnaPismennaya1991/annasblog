import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'The Precious Heritage Collection by Réhahn',
    miniImg: 'CollectionByRehahn',
    miniText: 'Вдохновения пост',
    date: '11.07.2017'
}

const CollectionByRehahn = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default CollectionByRehahn;
