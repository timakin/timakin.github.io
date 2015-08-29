'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class Timakin extends Component {
    render() {
        return(
            <div>
                <header><h2>timakinのほ〜むぺ〜じへっだ〜</h2></header>
                <h1>こんにちはこんにちは！</h1>
                <footer><h2>timakinのほ〜むぺ〜じふった〜</h2></footer>
            </div>
        );
    }
}
