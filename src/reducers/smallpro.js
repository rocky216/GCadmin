const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

const stateInit = {
  aa: 11
}

export default function(state = stateInit, action){
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return Object.assign({},state)
    default:
      return  stateInit
  }
}
