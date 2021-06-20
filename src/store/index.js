import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

let store;
export function configureStore() {
  store = createStore(reducers, applyMiddleware(thunk, logger));

  return store;
}