import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from "react-redux"
import {combineReducers } from "redux"
import { Router, Route, browserHistory } from 'react-router'
import _ from "lodash"
import configureStore from "./store"
import allRoutes from "routers"

window._ = _;

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {allRoutes()}
    </Router>
  </Provider>,
  document.getElementById('root')
);
