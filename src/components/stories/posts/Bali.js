import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Бали. Единство в разнообразии',
    img: 'Bali',
    text: 'Сверхъестественные сущности этого острова как-то договариваются с владыками ветров, и те гонят дождевые тучи мимо их владений.',
    date: '27.09.2017'
}

const Bali = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default Bali;