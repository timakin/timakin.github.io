import React from 'react';
import Router from 'react-router';
var {Link} = Router;

export default class Home extends React.Component {
    render() {
        return(
           <div>
                <Link to="github">github</Link>
                <h1>Timakinのほ〜むぺ〜じ</h1>
           </div>
        );
    }
}
