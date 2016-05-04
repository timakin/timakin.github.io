'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, Link } from 'react-router'

class Home extends React.Component {
    render() {
        return <div>Hello world!!!!!</div>
    }
}

ReactDOM.render((
    <Router>
        <Route path="/" component={Home} />
    </Router>
), document.getElementById('root'));
