import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Бангкок — зеленый оазис в окружении небоскребов',
    img: 'Bangkok',
    text: 'Бангкок стирает границы между Востоком и Западом, между историей и современностью, он впитал в себя все самое интересное и противоречивое, что есть в Таиланде.',
    date: '23.01.2018'
}

const Bangkok = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default Bangkok;
