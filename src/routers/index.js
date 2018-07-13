import React from "react"
import {Route, IndexRedirect } from "react-router"
import App from "views/app"
import Home from "views/home"
import Login from "views/login"




export default ()=>(
  <Route>
    <Route path="/" component={App}>
      <IndexRedirect to="home" />
      <Route path="/home" component={Home} defaultOpenKeys={1} defaultSelectedKeys={101} ></Route>
    </Route>
    <Route path="/login" component={Login} />
  </Route>
)
