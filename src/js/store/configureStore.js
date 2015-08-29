import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers';
import { combineReducers, applyMiddleware, createStore } from 'redux';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

// Creates a preconfigured store for this example.
export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
