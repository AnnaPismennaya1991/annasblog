import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: '«Страна улыбок» или Таиланд в лицах',
    img: 'ThaiSmileCountry',
    text: 'Их улыбки и смех согревают, наполняют душу теплом. А после общения с ними чувствуешь уют, радость и лёгкую нотку грусти в момент расставания.',
    date: '11.08.2017'
}

const ThaiSmileCountry = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default ThaiSmileCountry;
