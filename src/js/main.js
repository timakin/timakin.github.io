'use strict';

import React from 'react';
import Timakin from './components/Timakin';
import TopPage from './components/TopPage/TopPage';
import Github from './components/Portfolio/Github';
import Router from 'react-router'; 
var { DefaultRoute, Route } = Router;

var routes = (
    <Route handler={Timakin}>
        <Route name="toppage" path="/" handler={TopPage} />
        <Route name="github" path="/portfolio/github" handler={Github} />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('content'));
});
