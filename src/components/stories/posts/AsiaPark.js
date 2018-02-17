import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Asia Park',
    miniImg: 'AsiaPark',
    miniText: 'Центр развлечений Asia Park',
    date: '19.07.2017'
}

const AsiaPark = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default AsiaPark;
