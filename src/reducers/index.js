import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import smallpro from "./smallpro"
import app from "./app"

const reducers = combineReducers({
  routing:routerReducer,
  app,
  smallpro
})

export default reducers
