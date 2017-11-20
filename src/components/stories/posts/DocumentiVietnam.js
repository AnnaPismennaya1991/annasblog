import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Необходимые документы во Вьетнам',
    img: 'DocumentiVietnam',
    text: 'Трудности в оформлении приглашения',
    date: '03.06.2017'
}

const DocumentiVietnam = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default DocumentiVietnam;