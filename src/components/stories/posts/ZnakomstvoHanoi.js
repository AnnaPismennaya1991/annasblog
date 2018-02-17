import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Знакомство с Ханоем',
    miniImg: 'ZnakomstvoHanoi',
    miniText: 'Такси выезжает на мост, поля остаются далеко позади, а перед нами открывается вид на суматошный город.',
    date: '25.06.2017'
}

const ZnakomstvoHanoi = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default ZnakomstvoHanoi;
