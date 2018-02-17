import React from 'react';
import { Route } from 'react-router-dom';

import posts from './stories/constants';
import Stories from './stories/Stories';
import Story from './stories/Story';

const renderRoutes = () => {
    return posts.map((post) => {
        const StoryComponent = () => <Story {...post} />;

        return <Route key={post.id} path={`/${post.id}`} component={StoryComponent} exact />;
    });
};

const Content = () => {
    return (
        <div>
            <Route path='/' component={Stories} exact />
            { renderRoutes() }
        </div>
    );
}

export default Content;
