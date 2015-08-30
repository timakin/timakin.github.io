import React, { Component } from 'react';
import { Link } from 'react-router';
import CSS from '../../../css/home/home.css';

export default class Home extends Component {
    render() {
        return(
           <div className={CSS.home}>
                <h1>Timakinのほ〜むぺ〜じ</h1>
                <Link to="github">github</Link>
           </div>
        );
    }
}
