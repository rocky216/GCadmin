import React from "react"
import {Route, IndexRedirect } from "react-router"
import App from "views/app"
import Home from "views/home"




export default ()=>(
  <Route>
    <Route path="/" component={App}>
      <IndexRedirect to="home" />
      <Route path="/home" component={Home}></Route>
    </Route>
  </Route>
)
