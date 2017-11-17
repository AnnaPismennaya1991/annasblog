import React, { Component } from 'react';
import { connect } from 'react-redux';

import getStories from '../actions/storiesActions';

class Stores extends Component {
    componentWillMount() {
        this.props.getStories();
    }

    componentWillReceiveProps(state) {
        console.log(state.stories);
    }

    render() {
        return <div>Stores</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state.stories
    }
}

export default connect(mapStateToProps, { getStories })(Stores);
