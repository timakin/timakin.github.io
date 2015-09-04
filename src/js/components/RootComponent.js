'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Redirect } from 'react-router';
import App from './App'
import Home from './Home/Home';
import Github from './Portfolio/Github';

import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';
const history = new HashHistory();

export default class RootComponent extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const routerState = this.props.initialState || this.props;
        return(
            <Router history={history} {...routerState}>
                <Route name="app" component={App}>
                    <Route name="home" path="home" component={Home} />
                    <Route name="github" path="github" component={Github} />
                    <Redirect path="/" to="home" />
                </Route>
            </Router>
        );
    }
}
