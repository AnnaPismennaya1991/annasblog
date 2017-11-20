import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Asia Park',
    img: 'AsiaPark',
    text: 'Центр развлечений Asia Park',
    date: '19.07.2017'
}

const AsiaPark = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default AsiaPark;