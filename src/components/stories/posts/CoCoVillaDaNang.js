import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'CoCo Villa Da Nang',
    miniImg: 'CoCoVillaDaNang',
    miniText: 'Apartment"s and Hotel',
    date: '03.07.2017'
}

const CoCoVillaDaNang = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default CoCoVillaDaNang;
