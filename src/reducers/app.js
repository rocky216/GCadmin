import {
  APP_SELECT_KEY
} from "actions/appAction"


const stateInitial = {
  spending: true
}

export default function(state = stateInitial, action){
  switch (action.type) {
    case APP_SELECT_KEY:
      return Object.assign({},state, action)
    default:
      return  state
  }
}
