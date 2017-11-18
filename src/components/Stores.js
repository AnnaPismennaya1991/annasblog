import React, { Component } from 'react';
import { connect } from 'react-redux';

import getStories from '../actions/storiesActions';

class Stores extends Component {
    componentWillMount() {
        this.props.getStories();
    }

    renderStories = () => {
        return this.props.stories.map((story, index) => {
            return <div key={index}>{ story.name }</div>
        })
    }

    render() {
        return (
            <div>
                { this.props.stories.length && this.renderStories() }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state.stories
    }
}

export default connect(mapStateToProps, { getStories })(Stores);
