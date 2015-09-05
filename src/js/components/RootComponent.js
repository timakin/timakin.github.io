'use strict';

import React, { Component, PropTypes } from 'react';
import { Router, Route, Redirect } from 'react-router';

import App from './App'
import Home from './Home/Home';
import Github from './Portfolio/Github';

import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';

export default class RootComponent extends Component {
    render() {
        const history = new HashHistory();
        return(
            <Router history={history}>
                <Route name="app" component={App}>
                    <Route name="home" path="home" component={Home} />
                    <Route name="github" path="github" component={Github} />
                    <Redirect path="/" to="home" />
                </Route>
            </Router>
        );
    }
}
