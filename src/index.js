import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from "react-redux"
import {combineReducers } from "redux"
import { Router, Route, browserHistory } from 'react-router'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import allRoutes from "routers"



ReactDOM.render(
  <Router history={browserHistory}>
    {allRoutes()}
  </Router>,
  document.getElementById('root')
);
