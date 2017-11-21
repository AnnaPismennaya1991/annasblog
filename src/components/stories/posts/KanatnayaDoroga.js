import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Канатная дорога и мост над пропастью',
    img: 'KanatnayaDoroga',
    text: 'На вершине перед нами открылся незабываемый вид - горы, лазурное море, архипелаг.  Дышишь полной грудью и наступает ощущение лёгкости и свободы, невесомости и парения.',
    date: '29.08.2017'
}

const KanatnayaDoroga = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default KanatnayaDoroga;
