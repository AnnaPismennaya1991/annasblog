import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Where are you from..?',
    miniImg: 'WhereAreYouFrom',
    miniText: 'Дружелюбный, радостный, искренний, отзывчивый и слегка наивный народ',
    date: '28.06.2017'
}

const WhereAreYouFrom = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default WhereAreYouFrom;
