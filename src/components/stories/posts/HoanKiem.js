import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Hoàn Kiếm',
    miniImg: 'hoanKiem',
    miniText: 'Озеро возвращённого меча',
    date: '27.06.2017'
}

const HoanKiem = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default HoanKiem;
