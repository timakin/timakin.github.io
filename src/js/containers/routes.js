import React from "react"
import {Route, Redirect} from 'react-router';
import App from "../components/App"
import Home from '../components/Home/Home'

export default (
  <Route component={App}>
        <Route path="home" component={Home} />
        <Redirect from='/' to='home' />
  </Route>
);
