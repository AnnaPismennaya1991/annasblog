import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Hoàn Kiếm',
    img: 'hoanKiem',
    text: 'Озеро возвращённого меча',
    date: '29.06.2017'
}

const HoanKiem = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default HoanKiem;
