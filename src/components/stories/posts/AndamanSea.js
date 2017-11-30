import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Чудеса Андаманского моря',
    img: 'AndamanSea',
    text: 'Во время сезона дождей море особенно штормит. Волны выбрасывают на берег морских звёздочек, кусочки кораллов, перламутровые ракушки и разноцветные камни.',
    date: '28.08.2017'
}

const AndamanSea = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini &&
                <div>
                    <h1>Чудеса Андаманского моря</h1>
                    <div>
                        <br />Во время сезона дождей море особенно штормит. Волны выбрасывают на берег морских звёздочек, кусочки кораллов, перламутровые ракушки и разноцветные камни.
                        <br />
                        <br />Этот колючий красавчик- один из разновидностей <b>морских ежей.</b>
                        <br />
                        <br />Маленький <b>осьминог.</b>
                        <br />
                        <br />Мелкий <b>краб</b> застыл и делает вид, что его нет.
                        <br />
                        <br /><b>Мечехвост</b> — один из самых древних видов животных, они живут на Земле более 200 (по некоторым источникам более 440) миллионов лет. Их употребляют в пищу, правда, съедобного в них очень мало. До сих пор остаётся загадкой, как их готовят.
                        <br />
                        <br />Понятия не имею, как называется это «скользкое» творение. Оно живое, сокращается и двигается. Размером с ладонь.
                    </div>
                </div> }
        </div>
    )
};

export default AndamanSea;
