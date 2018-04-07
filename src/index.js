import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import { store, history } from "./store";
import Home from "./containers/Home";
import Navbar from "./containers/Navbar";
import Register from "./containers/Register";
import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={Navbar} />
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
