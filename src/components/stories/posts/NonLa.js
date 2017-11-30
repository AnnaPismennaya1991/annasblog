import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: '«Non la»',
    img: 'NonLa',
    text: 'Вьетнам не был бы Вьетнамом, без конусообразной соломенной шляпы «Non la».',
    date: '27.06.2017'
}

const NonLa = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default NonLa;
