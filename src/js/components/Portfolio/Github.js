import React from 'react';

export default class Github extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const { loadGithubRepos, portfolio } = this.props;
        const result = loadGithubRepos;
        console.log(portfolio);
        console.log(result);
    }

    render() {
        return(
           <div>
                <h1>Githubのポートフォリオ</h1>
           </div>
        );
    }
}
