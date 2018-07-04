import {
  SELECT_SUBREDDIT
} from "actions/smallproAction"



const stateInit = {
  aa: 11
}

export default function(state = stateInit, action){
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return Object.assign({},state, action)
    default:
      return  stateInit
  }
}
