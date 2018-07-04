import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from "react-redux"
import {combineReducers } from "redux"
import { Router, Route, browserHistory } from 'react-router'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import configureStore from "./store"

import allRoutes from "routers"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {allRoutes()}
    </Router>
  </Provider>,
  document.getElementById('root')
);
