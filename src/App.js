import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import history from './store/history';

class App extends Component {
  render() {
    return (
        <Router history={history}>
            <div className="App">
                <Header/>
                <Content/>
                { false && <Footer/> }
            </div>
        </Router>
    );
  }
}

export default App;
