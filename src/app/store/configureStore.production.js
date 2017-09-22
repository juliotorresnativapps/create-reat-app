import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import historyMiddleware from '../history';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(promiseMiddleware, historyMiddleware, thunk)
)(createStore);

export default function configureStore(initialState) {
  return enhancer(rootReducer, initialState);
}
