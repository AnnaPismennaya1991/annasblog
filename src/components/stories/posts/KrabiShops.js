import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Экскурсия по магазинам в Краби',
    img: 'KrabiShops',
    text: 'На стеллажах Вы найдёте интересные косметические средства в мини упаковках, декоративную косметику, туалетные принадлежности, протеины, био-добавки, энергетики, таблетки, пластыри, местные микстуры, мази, чудо-пасты, скотч, карабины, ручки, порошки, в общем - мелочи на все случаи в жизни!',
    date: '15.08.2017'
}

const KrabiShops = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default KrabiShops;
