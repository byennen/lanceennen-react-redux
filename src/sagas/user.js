import { call, put, takeLatest } from "redux-saga/effects";
import queryString from "query-string";

import {
  loginUser as loginUserAPI,
  logoutUser as logoutUserAPI
} from "../api/user";
import {
  LOGIN_USER,
  LOGOUT_USER,
  loginUserSuccess,
  loginUserFailed,
  logoutUserSuccess,
  logoutUserFailed
} from "../actions/user";
import { history } from "../store/";

export function* loginUserSaga(aciton) {
  try {
    const result = yield call(loginUserAPI);
    yield put(loginUserSuccess(result));
    const queries = queryString.parse(window.location.search);
    yield call(history.push, queries.redirect);
  } catch (err) {
    yield put(loginUserFailed(err));
  }
}

export function* logoutUserSaga(aciton) {
  try {
    const result = yield call(logoutUserAPI);
    yield put(logoutUserSuccess(result));
    yield call(history.push, "/");
  } catch (err) {
    yield put(logoutUserFailed(err));
  }
}

export function* watchLoginUser() {
  yield takeLatest(LOGIN_USER, loginUserSaga);
}

export function* watchLogoutUser() {
  yield takeLatest(LOGOUT_USER, logoutUserSaga);
}
