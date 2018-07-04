export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

export function getList(params){
  return function(dispatch, getState){
    dispatch({
      type: SELECT_SUBREDDIT,
      mydata: "mydata",
      spending: false
    })
  }
}
