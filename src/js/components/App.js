'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteHandler } from 'react-router';

export default class App extends Component {
    render() {
        return(
            <div>
                <header><h2>timakinのほ〜むぺ〜じへっだ〜</h2></header>
                <h1>こんにちはこんにちは！</h1>
                <RouteHandler/>
                <footer><h2>timakinのほ〜むぺ〜じふった〜</h2></footer>
            </div>
        );
    }
}
