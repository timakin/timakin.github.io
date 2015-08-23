'use strict';

import React from 'react';
import Timakin from './components/Timakin';
import Home from './components/Home/Home';
import Github from './components/Portfolio/Github';
import Router from 'react-router'; 
var { DefaultRoute, Route } = Router;

var routes = (
    <Route handler={Timakin}>
        <Route name="toppage" path="/" handler={Home} />
        <Route name="github" path="/portfolio/github" handler={Github} />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('content'));
});
