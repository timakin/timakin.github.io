import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import * as reducers from '../reducers';
import { combineReducers, applyMiddleware, createStore } from 'redux';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

// Creates a preconfigured store for this example.
export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
