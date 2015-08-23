import React from 'react';
import TopPage from './components/TopPage/TopPage';
import Router from 'react-router'; 
var { DefaultRoute, Link, Route, RouteHandler } = Router;

React.render(
    <TopPage />,
    document.getElementById('content')
);
