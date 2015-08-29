import React, { Component } from 'react';
import Router from 'react-router'
import { Provider } from 'react-redux';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';
import configureStore from '../store/configureStore';
import routes from './routes';

const store = configureStore();
const history = new HashHistory();
const rootElement = (
    <Provider store={store}>
        {() => <Router history={history} routes={routes} />}
    </Provider>
);

export default rootElement;
