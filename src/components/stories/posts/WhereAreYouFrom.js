import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Where are you from..?',
    img: 'WhereAreYouFrom',
    text: 'Дружелюбный, радостный, искренний, отзывчивый и слегка наивный народ',
    date: '28.06.2017'
}

const WhereAreYouFrom = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default WhereAreYouFrom;
