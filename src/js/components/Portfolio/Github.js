import React from 'react';
import PortfolioStore from '../../store/PortfolioStore';
import { ActionCreators } from '../../actions/ActionCreators';

export default class Github extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getPortfolioState();
        this._onChange = this._onChange.bind(this);
    }

    getPortfolioState() {
        return {
            allRepos: PortfolioStore.getAll()
        };
    }

    componentDidMount() {
        PortfolioStore.addEventListener(this._onChange);
        ActionCreators.loadGithubRepos();
    }

    componentWillUnmount() {
        PortfolioStore.removeChangeListener(this._onChange);
    }

    render() {
      console.log(this.state.allRepos);
        return(
           <div>
                <h1>Githubのポートフォリオ</h1>
                <ul>
                  {this.state.allRepos.map((repo) => {
                      return <li key={repo.id}>{repo.name}: {repo.url}</li>;
                  })}
                </ul>
           </div>
        );
    }

    _onChange() {
        this.setState(this.getPortfolioState());
    }
}
