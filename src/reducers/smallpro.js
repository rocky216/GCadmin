import {
  SELECT_SUBREDDIT
} from "actions/smallproAction"



const stateInitial = {
  spending: true
}

export default function(state = stateInitial, action){
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return Object.assign({},state, action)
    default:
      return  state
  }
}
