import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Хойан. Вьетнамская Венеция',
    img: 'Hoian',
    text: 'Город ярких фонариков, колоритных свадеб, улыбчивых вьетнамцев, бамбуковых велосипедов, глазастых лодочек, зеленых окрестностей, желтых зданий, вкуснейшей кухни и беззаботно гуляющих, туристов.',
    date: '.07.2017'
}

const Hoian = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default Hoian;
