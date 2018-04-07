import { all } from "redux-saga/effects";

import { watchLoginUser, watchLogoutUser } from "./user";

export default function* rootSaga() {
  yield all([watchLoginUser(), watchLogoutUser()]);
}
