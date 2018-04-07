import { createStore, applyMiddleware, combineReducers } from "redux";
import { routerMiddleware, routerReducer } from "react-router-redux";
import createSagaMiddleware from "redux-saga";

import history from "./history";
import * as reducers from "../reducers/";
import rootSaga from "../sagas/";

const saga = createSagaMiddleware();

const store = createStore(
  combineReducers({ ...reducers, routing: routerReducer }),
  undefined,
  applyMiddleware(saga, routerMiddleware(history))
);

saga.run(rootSaga);

export { store, history };
