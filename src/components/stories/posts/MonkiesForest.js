import React from 'react';

import MiniTemplate from '../miniTemplate/MiniTemplate';

const miniConfig = {
    title: 'Лес обезьян в Убуде',
    img: 'MonkiesForest',
    text: 'Путешествуя по Азии, перестаёшь замечать мартышек, которые окружают тебя повсюду. Они становятся настолько привычны, что Азия без них уже не Азия.',
    date: '31.10.2017'
}

const MonkiesForest = (props) => {
    return (
        <div>
            { props.mini && <MiniTemplate {...miniConfig} />}
            { !props.mini &&
                <div>
                    <h1>Лес обезьян в Убуде</h1>
                    <div>
                        <br />Путешествуя по Азии, перестаёшь замечать мартышек, которые окружают тебя повсюду. Они становятся настолько привычны, что Азия без них уже не Азия.<br />
                        <br />В Таиланде мы встречали обезьян в буддийских храмах в джунглях и на островах.<br />
                        <br />В Малайзии не было ни дня без общения с мартышками — они поджидали нас на обочине дорог, пешеходных тропинках, на водопадах, в туристических местах.<br />
                        <br />Поселившись в Убуде (Бали, Индонезия), узнали, что в двух километрах от нас есть целый Лес обезьян. Живой интерес перевесил и мы решили посетить это нашумевшее место, чтобы полностью насладиться общением с хозяевами острова.<br />
                        <br />Первый раз мы приехали без еды, разочарованные обезьяны, после безрезультатного поиска вкусняшек, обиженно уходили.<br />
                        <br />Бесстрашный мелкий мартышонок не оставлял надежду что-то найти, он запрыгнул и тут же начал рыскать в карманах, за несколько секунд он чуть не утащил ключи и телефон. Мама-мартышка с «низкого старта» пристально наблюдала за происходящим, она готова была в любую минуту кинуться, чтобы защитить детеныша.<br />
                        <br />Через два дня мы решили вернуться с пакетом бананов и арахиса. Угощение явно пришлось по вкусу.<br />
                        <br />Учуяв аромат арахиса, мартышки, как заведённые, кинулись в нашу сторону. Они прыгали на нас, выпрашивали орехи, так и норовили отнять пакет с вкусностями.<br />
                        <br />Одна наглая морда неожиданно прыгнула, схватилась зубами и повисла на пакете, нервно дергаясь, чтобы высыпать все содержимое.<br />
                        <br />Рядом стоящий иностранец решил нам помочь,  он отвлёк внимание обезьян на себя, чтобы мы успели спрятать арахис.<br />
                        <br />Прошло немного времени, мартышки успокоились. Я никак не могла смириться с тем, что у меня нет ни одной фотографии с мохнатыми. Решила попробовать ещё раз покормить вожака и сделать пару удачных кадров. Вот наивная!<br />
                        <br />Все начиналось очень хорошо. Подошёл самец, такой большой, мягкий, он аккуратно взял с моей ладони все орешки, пальчики у него тёплые и приятные. Расплывшись в улыбке от бесконечной радости — «наконец удалось потрогать мартышку», я потеряла бдительность и не заметила, как сзади ко мне подошла самка.<br />
                        <br />Она посмотрела на мои руки, увидев, что орехов нет, начала ползти мне на плечо (видимо, искала что-то съедобное ), когда она полезла под майку, я испугалась и хотела её оттолкнуть, мартышка не ожидала такой реакции и, испугавшись в ответ, укусила меня за руку.<br />
                        <br />В миг все чары развеялись, любовь и трепет к обезьянам ушел на второй план, а в голове бегущей строкой пронеслись мысли — «Ну вот! Доигралась! И стоило идти сюда еще раз? Больше никаких диких зверей!»<br />

                    </div>
                </div> }
        </div>
    )
};

export default MonkiesForest;
