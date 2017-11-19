import React  from 'react';

import MiniPost from './MiniPost';

const miniConfig = {
    title: 'Необходимые документы',
    img: 'Изображение',
    text: 'Текст',
    date: 'Дата'
}

const DocumentiVietnam = (props) => {
    return (
        <div>
            { props.mini && <MiniPost {...miniConfig} />}
            { !props.mini && <div>Вся статья</div> }
        </div>
    )
};

export default DocumentiVietnam;
