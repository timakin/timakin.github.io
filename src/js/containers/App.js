import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RootComponent from '../components/RootComponent';
import * as PortfolioActions from '../actions/portfolio';

function mapStateToProps(state) {
  return {
    portfolio: state.portfolio
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PortfolioActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
