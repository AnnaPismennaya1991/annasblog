import React from 'react';
import { Route } from 'react-router-dom';

import LatestStories from './LatestStories';
import Stories from './stories/Stories';
import posts from './stories/posts';

const renderRoutes = () => {
    return posts.map((post, index) => {
        const Component = post.component;
        return <Route key={index} path={`/${post.path}`} component={Component} exact />;
    });
}

const Content = () => {
    return (
        <div>
            { false && <LatestStories/> }
            <Route path='/' component={Stories} exact />
            { renderRoutes() }
        </div>
    );
}

export default Content;
