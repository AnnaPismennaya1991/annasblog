import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Остров обезьян',
    img: 'Monkey',
    text: 'Какой-то странный шум листьев послышался впереди... На нас бесстрашно смотрела стая серых обезьян.',
    date: '18.08.2017'
}

const Monkey = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default Monkey;
