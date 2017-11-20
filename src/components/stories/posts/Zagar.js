import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Рецепт вьетнамского загара: час на солнце и никакого крема. Почувствуй себя угольком!',
    img: 'Zagar',
    text: 'Даже в жаркую погоду, под безжалостным солнцем, все вьетнамцы носят кофты, плотные рубашки с длинным рукавом, джинсы, прячась от солнца.',
    date: '28.06.2017'
}

const Zagar = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default Zagar;