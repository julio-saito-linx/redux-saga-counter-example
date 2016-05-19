import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

export function* incrementAsync() {
  yield put({type: 'SHOW_LOADING'});
  yield call(delay, 1000);
  yield put({type: 'INCREMENT'});
  yield put({type: 'HIDE_LOADING'});
}

export default function* rootSaga() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync);
}
