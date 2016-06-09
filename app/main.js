import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {combineReducers} from 'redux-immutable';
import Immutable from 'immutable';

import Counter from './components/Counter';

import {
  counter,
  showLoading
} from './reducers';

import rootSaga from './sagas';

const initialState = Immutable.fromJS({
  counter: {
    count: 0,
  },
  showLoading: {
    display: false,
  }
});

const rootReducer = combineReducers({counter, showLoading});

const sagaMiddleware = createSagaMiddleware({});
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({type});

function render() {
  ReactDOM.render(
    <Counter
      state={store.getState()}
      onReset={() => action('RESET')}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementIfOdd={() => action('INCREMENT_IF_ODD')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
    />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
