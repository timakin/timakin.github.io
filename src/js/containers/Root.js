import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router'
import { Provider } from 'react-redux';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';
import configureStore from '../store/configureStore';

import App from '../components/App';
import Home from '../components/Home/Home';

const store = configureStore();
const history = new HashHistory();

export default class Root extends Component {
    render() {
        return (
                <Provider store={store}>
                    {() => 
                        <Router history={history}>
                            <Route name="app" component={App}>
                                <Route name="home" path="home" component={Home} />
                                <Redirect path="/" to="home" />
                            </Route>
                        </Router>
                    }
                </Provider>
        );
    }
}

