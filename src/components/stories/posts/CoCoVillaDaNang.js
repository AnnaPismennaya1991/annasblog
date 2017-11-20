import React from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'CoCo Villa Da Nang',
    img: 'CoCoVillaDaNang',
    text: 'Apartment"s and Hotel',
    date: '03.07.2017'
}

const CoCoVillaDaNang = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default CoCoVillaDaNang;
