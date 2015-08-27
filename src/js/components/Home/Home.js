import React from 'react';
import Router from 'react-router';
import CSS from '../../../css/home/home.css';
var {Link} = Router;

export default class Home extends React.Component {
    render() {
        return(
           <div className={CSS.home}>
                <Link to="github">github</Link>
                <h1>Timakinのほ〜むぺ〜じ</h1>
           </div>
        );
    }
}
