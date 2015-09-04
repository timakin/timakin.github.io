import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';
import configureStore from '../store/configureStore';

import App from './App';

const store = configureStore();
const history = new HashHistory();

export default class Root extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
                <Provider store={store}>
                    {() => <App />}
                </Provider>
        );
    }
}
