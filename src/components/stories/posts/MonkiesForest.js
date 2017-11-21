import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Лес обезьян в Убуде',
    img: 'MonkiesForest',
    text: 'Путешествуя по Азии, перестаёшь замечать мартышек, которые окружают тебя повсюду. Они становятся настолько привычны, что Азия без них уже не Азия.',
    date: '31.10.2017'
}

const MonkiesForest = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default MonkiesForest;
