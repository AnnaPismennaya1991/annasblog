// один пост
import React from 'react';

import MiniPost from './miniPost/MiniPost';
import './Post.css';

const renderImages = (images = []) => {
    return images.map((image, index) => {
        return (
            <div key={index}>
                <img src={image} alt={image} />
            </div>
        );
    });
}

const renderBlocks = (items) => {
    return items.map((block, index) => {
        return (
            <section className={`${block.className || ''} story-section`} key={index}>
                <div dangerouslySetInnerHTML={{ __html: block.text }}></div>

                { renderImages(block.img) }
            </section>
        )
    });
};

const Post = (props) => {
    console.log(props);
    return (
        <div className='post'>
            { props.mini && <MiniPost {...props} /> }
            { !props.mini &&
                <div>
                    <div className='title'>{ props.title }</div>
                    { renderBlocks(props.items) }
                </div>
            }
        </div>
    );
};

export default Post;
