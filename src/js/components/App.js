'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteHandler } from 'react-router';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <header><h2>timakinのほ〜むぺ〜じへっだ〜</h2></header>
                <h1>こんにちはこんにちは！</h1>
                <div>{this.props.children}</div>
                <footer><h2>timakinのほ〜むぺ〜じふった〜</h2></footer>
            </div>
        );
    }
}
