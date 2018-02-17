import React from 'react';
import { Route } from 'react-router-dom';

import PostsContainer from './posts/PostsContainer';
import Post from './posts/Post';
import posts from './posts/constants';

const renderRoutes = () => {
    return posts.map((post) => {
        const PostComponent = () => <Post {...post} />;

        return <Route key={post.id} path={`/${post.id}`} component={PostComponent} exact />;
    });
};

const Content = () => {
    return (
        <div>
            <Route path='/' component={PostsContainer} exact />
            { renderRoutes() }
        </div>
    );
}

export default Content;
