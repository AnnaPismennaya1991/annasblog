import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Oriental Village',
    img: 'OrientalVillage',
    text: 'Первые две недели жизни на острове Лангкави (Малайзия) мы решили провести в Geo Park Hotel в Oriental Village.',
    date: '27.08.2017'
}

const OrientalVillage = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default OrientalVillage;
