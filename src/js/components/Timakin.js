'use strict';

import React from 'react';
import Router from 'react-router'; 
var { DefaultRoute, Link, Route, RouteHandler } = Router;

export default class Timakin extends React.Component {
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
